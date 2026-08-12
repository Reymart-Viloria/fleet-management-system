Deploying the ledger Cloud Function and Firestore rules

1) Install Firebase CLI and initialize functions

```bash
npm install -g firebase-tools
firebase login
firebase init functions firestore
```

Choose your Firebase project and when asked for language use JavaScript and install dependencies.

2) Copy the `functions` folder from this repo into your Firebase project root.

3) Deploy functions and rules

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
firebase deploy --only firestore:rules
```

4) Configure clients
- Set `window.FN_ENDPOINT` in `index.html` to the deployed function URL (found in the deploy output).
- Ensure `window.FIREBASE_CONFIG` is set in `index.html` for Firestore listeners.

5) Secure access
- The Cloud Function uses the Admin SDK and bypasses rules. To restrict client access, you should:
  - Require authenticated users to call the function (check `request.auth` inside the function) and set appropriate rules, or
  - Put the function behind a simple API gateway with authentication.

6) Notes
- Ledger entries are stored under `vanguard/ledgerEntries/entries/{ts}`. The canonical transits doc is `vanguard/transits`.
