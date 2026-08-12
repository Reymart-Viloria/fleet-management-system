const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

// HTTP function to append a transit change to an append-only ledger
exports.appendTransit = functions.https.onRequest(async (req, res) => {
    // Allow CORS from any origin for now (restrict in production)
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).send('');

    try {
        if (req.method !== 'POST') return res.status(405).send({ error: 'POST required' });
        const body = req.body || {};
        const transits = body.transits || [];
        const clientId = body.clientId || 'unknown';

        const payload = JSON.stringify(transits);
        const ts = Date.now();

        // Get previous ledger hash
        const ledgerCol = db.collection('vanguard').doc('ledgerEntries').collection('entries');
        const prevSnap = await ledgerCol.orderBy('ts', 'desc').limit(1).get();
        let prevHash = '';
        if (!prevSnap.empty) {
            const prev = prevSnap.docs[0].data();
            prevHash = prev.hash || '';
        }

        // Compute new hash: SHA256(prevHash + payload + ts)
        const hash = crypto.createHash('sha256').update(prevHash + payload + ts).digest('hex');

        // Write ledger entry
        const entry = {
            ts,
            clientId,
            payload,
            prevHash,
            hash
        };

        await ledgerCol.doc(String(ts)).set(entry);

        // Update canonical transits document
        const transitsDoc = db.collection('vanguard').doc('transits');
        await transitsDoc.set({ payload, ts }, { merge: true });

        return res.status(200).send({ ok: true, ts, hash });
    } catch (err) {
        console.error('appendTransit error', err);
        return res.status(500).send({ error: String(err) });
    }
});
