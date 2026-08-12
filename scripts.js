// Luzon Cities and Municipalities
        let LUZON_LOCATIONS = [
            // NCR
            "Caloocan, Metro Manila", "Las Piñas, Metro Manila", "Makati, Metro Manila", "Malabon, Metro Manila",
            "Mandaluyong, Metro Manila", "Manila, Metro Manila", "Marikina, Metro Manila", "Muntinlupa, Metro Manila",
            "Navotas, Metro Manila", "Parañaque, Metro Manila", "Pasay, Metro Manila", "Pasig, Metro Manila",
            "Pateros, Metro Manila", "Quezon City, Metro Manila", "San Juan, Metro Manila", "Taguig, Metro Manila", 
            "Valenzuela, Metro Manila",
            
            "Abucay, Bataan", "Aliaga, Nueva Ecija", "Angat, Bulacan", "Angeles, Pampanga", 
            "Apalit, Pampanga", "Arayat, Pampanga", "Aurora, Zzambales", "Bacas, Bulacan", 
            "Bacolor, Pampanga", "Balanga, Bataan", "Baler, Aurora", "Baliwag, Bulacan", 
            "Balungao, Nueva Ecija", "Bamban, Tarlac", "Bongabon, Nueva Ecija", "Bocaue, Bulacan", 
            "Bustos, Bulacan", "Cabanatuan, Nueva Ecija", "Cabangan, Zambales", "Cabañgan, Bataan", 
            "Calumpit, Bulacan", "Camiling, Tarlac", "Candaba, Pampanga", "Candelaria, Zambales", 
            "Capas, Tarlac", "Castillejos, Zambales", "Cuyapo, Nueva Ecija", "Dinalupihan, Bataan", 
            "Doña Remedios Trinidad, Bulacan", "Floridablanca, Pampanga", "Gabaldon, Nueva Ecija", "Gapan, Nueva Ecija", 
            "Guiguinto, Bulacan", "Guimba, Nueva Ecija", "Hermosa, Bataan", "Iba, Zambales", 
            "Jaen, Nueva Ecija", "Laur, Nueva Ecija", "Licab, Nueva Ecija", "Llanera, Nueva Ecija", 
            "Lubao, Pampanga", "Mabalacat, Pampanga", "Macabebe, Pampanga", "Magalang, Pampanga", 
            "Masinloc, Zambales", "Malolos, Bulacan", "Marilao, Bulacan", "Mariveles, Bataan", 
            "Meycauayan, Bulacan", "Mexico, Pampanga", "Minalin, Pampanga", "Morong, Bataan", 
            "Muñoz, Nueva Ecija", "Nampicuan, Nueva Ecija", "Norzagaray, Bulacan", "Obando, Bulacan", 
            "Olongapo, Zambales", "Orani, Bataan", "Orion, Bataan", "Palayan, Nueva Ecija", 
            "Pandi, Bulacan", "Paniqui, Tarlac", "Paombong, Bulacan", "Plaridel, Bulacan", 
            "Pura, Tarlac", "Quezon, Nueva Ecija", "Ramos, Tarlac", "Rizal, Nueva Ecija", 
            "Pulilan, Bulacan", "Samal, Bataan", "San Antonio, Nueva Ecija", "San Antonio, Zambales", 
            "San Fabian, Tarlac", "San Felipe, Zambales", "San Fernando, Pampanga", "San Ildefonso, Bulacan", 
            "San Jose, Nueva Ecija", "San Jose, Tarlac", "San Jose del Monte, Bulacan", "San Leonardo, Nueva Ecija", 
            "San Luis, Aurora", "San Luis, Pampanga", "San Marcelino, Zambales", "San Miguel, Bulacan", 
            "San Narciso, Zambales", "San Simon, Pampanga", "Santa Ana, Pampanga", "Santa Cruz, Zambales", 
            "Santa Ignacia, Tarlac", "Santa Maria, Bulacan", "Santa Rosa, Nueva Ecija", "Santo Domingo, Nueva Ecija", 
            "Santo Tomas, Pampanga", "Sasmuan, Pampanga", "Subic, Zambales", "Talavera, Nueva Ecija", 
            "Talugtug, Nueva Ecija", "Tarlac City, Tarlac", "Victoria, Tarlac", "Zaragoza, Nueva Ecija",
            
            // Region IV-A - CALABARZON
            "Agoncillo, Batangas", "Alaminos, Laguna", "Alfonso, Cavite", "Amadeo, Cavite", 
            "Angono, Rizal", "Antipolo, Rizal", "Atimonan, Quezon", "Bacoor, Cavite", 
            "Balayan, Batangas", "Balete, Batangas", "Baras, Rizal", "Batangas City, Batangas", 
            "Bay, Laguna", "Biñan, Laguna", "Binangonan, Rizal", "Buenavista, Quezon", 
            "Burdeos, Quezon", "Cabuyao, Laguna", "Calaca, Batangas", "Calamba, Laguna", 
            "Calatagan, Batangas", "Calauag, Quezon", "Candelaria, Quezon", "Cainta, Rizal", 
            "Cardona, Rizal", "Carmona, Cavite", "Cavite City, Cavite", "Cuenca, Batangas", 
            "Dasmariñas, Cavite", "Dolores, Quezon", "General Luna, Quezon", "General Mariano Alvarez, Cavite", 
            "General Nakar, Quezon", "General Trias, Cavite", "Guinyangan, Quezon", "Gumaca, Quezon", 
            "Ibaan, Batangas", "Imus, Cavite", "Infanta, Quezon", "Jalajala, Rizal", 
            "Laurel, Batangas", "Lemery, Batangas", "Lian, Batangas", "Lipa, Batangas", 
            "Lobo, Batangas", "Lopez, Quezon", "Lucban, Quezon", "Lucena, Quezon", 
            "Luisiana, Laguna", "Lumban, Laguna", "Mabitac, Laguna", "Macalelon, Quezon", 
            "Magallanes, Cavite", "Magsaysay, Quezon", "Majayjay, Laguna", "Maragondon, Cavite", 
            "Mataasnakahoy, Batangas", "Mendez, Cavite", "Morong, Rizal", "Mulanay, Quezon", 
            "Nagcarlan, Laguna", "Naguilian, Quezon", "Nasugbu, Batangas", "Ondong, Quezon", 
            "Padre Garcia, Batangas", "Paete, Laguna", "Pagsanjan, Laguna", "Pagbilao, Quezon", 
            "Pakil, Laguna", "Pangil, Laguna", "Panukulan, Quezon", "Patnanungan, Quezon", 
            "Perez, Quezon", "Pitogo, Quezon", "Plaridel, Quezon", "Polillo, Quezon", "Quezon, Quezon", 
            "Real, Quezon", "Rizal, Laguna", "Rodriguez, Rizal", "Rosario, Batangas", "Rosario, Cavite", 
            "San Andres, Quezon", "San Juan, Batangas", "San Mateo, Rizal", "San Narciso, Quezon", 
            "San Pablo, Laguna", "San Pedro, Laguna", "Santa Cruz, Laguna", "Santa Maria, Laguna", 
            "Santa Rosa, Laguna", "Santo Tomas, Batangas", "Sariaya, Quezon", "Silang, Cavite", 
            "Siniloan, Laguna", "Tagaytay, Cavite", "Talisay, Batangas", "Tanauan, Batangas", 
            "Tanay, Rizal", "Tanza, Cavite", "Tayabas, Quezon", "Taytay, Rizal", 
            "Ternate, Cavite", "Tiaong, Quezon", "Trece Martires, Cavite", "Teresa, Rizal", 
            "Victoria, Laguna",

            // CAR - Cordillera Administrative Region
            "Abra de Ilog, Occidental Mindoro",
            "Aguinaldo, Ifugao", "Alfonso Lista, Ifugao", "Asipulo, Ifugao", "Atok, Benguet", 
            "Baguio City, Benguet", "Bakun, Benguet", "Balaoan, La Union",
            "Balbalan, Kalinga", "Banaue, Ifugao", "Bangued, Abra", "Barlig, Mountain Province", 
            "Bauko, Mountain Province", "Besao, Mountain Province", "Bokod, Benguet", "Boliney, Abra", 
            "Bontoc, Mountain Province", "Bucay, Abra", "Bucloc, Abra", "Buguias, Benguet", 
            "Calanasan, Apayao", "Conner, Apayao", "Daguioman, Abra", "Danglas, Abra", 
            "Dolores, Abra", "Flora, Apayao", "Hingyon, Ifugao", "Hungduan, Ifugao", 
            "Itogon, Benguet", "Kabayan, Benguet", "Kabugao, Apayao", "Kiangan, Ifugao", 
            "Kibungan, Benguet", "La Paz, Abra", "Lacub, Abra", "Lagawe, Ifugao", 
            "Lagangilang, Abra", "Lagayan, Abra", "Lamut, Ifugao", "Langiden, Abra", 
            "La Trinidad, Benguet", "Licuan-Baay, Abra", "Luba, Abra", "Lubuagan, Kalinga", 
            "Luna, Apayao", "Malibcong, Abra", "Manabo, Abra", "Mankayan, Benguet", 
            "Mayoyao, Ifugao", "Natonin, Mountain Province", "Paracelis, Mountain Province", "Pasil, Kalinga", 
            "Peñarrubia, Abra", "Pidigan, Abra", "Pilar, Abra", "Pinukpuk, Kalinga", 
            "Pudtol, Apayao", "Sablan, Benguet", "Sadanga, Mountain Province", "Sagada, Mountain Province", 
            "Sallapadan, Abra", "San Isidro, Abra", "San Juan, Abra", "San Quintin, Abra", 
            "Santa Marcela, Apayao", "Sabangan, Mountain Province", "Tabuk, Kalinga", "Tadian, Mountain Province", 
            "Tayum, Abra", "Tineg, Abra", "Tinglayan, Kalinga", "Tuba, Benguet", 
            "Tublay, Benguet", "Tubo, Abra", "Villaviciosa, Abra"


        ];

        // Remove duplicates, trim entries, and sort
        LUZON_LOCATIONS = Array.from(new Set(LUZON_LOCATIONS.map(s => s.trim()))).sort();

        // Data Store
        const SESSION_KEY = 'fleetSession';
        let currentUser = null;
        let currentRole = null;
        let editingDriverId = null;
        let editingVehicleId = null;
        let transitData = {
            tripType: null,
            departureDate: null,
            returnDate: null,
            destination: null,
            passengers: null,
            vehicleId: null,
            driverId: null,
            gas: 0,
            food: 0,
            misc: 0
        };
        let rejectingTransitId = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initializeData();
            setupLoginForm();
            setupModals();
            setupAutocomplete();
            setupBudgetCalculator();
            setupSync();
            setupSidebarGestures();
            // ensure any leftover mobile menu markup is removed
            removeLeftoverMenuButtons();
            initFirebaseIfConfigured();
            restoreSession();
        });

        // Cross-tab / cross-window sync channel
        let syncChannel = null;
        let firebaseActive = false;
        let firestoreDb = null;
        window.lastFirebaseWrite = 0;

        function setupSync() {
            try {
                syncChannel = new BroadcastChannel('vanguard-sync');
                syncChannel.onmessage = (e) => {
                    const key = e.data && e.data.key;
                    if (key) handleRemoteUpdate(key);
                };
            } catch (err) {
                // BroadcastChannel may not be available in older browsers
                syncChannel = null;
            }

            window.addEventListener('storage', (e) => {
                if (!e.key) return;
                if (e.key === 'vanguard-sync') {
                    try {
                        const payload = JSON.parse(e.newValue || '{}');
                        if (payload.key) handleRemoteUpdate(payload.key);
                    } catch (err) {
                        // ignore malformed sync payload
                    }
                    return;
                }
                handleRemoteUpdate(e.key);
            });

            window.addEventListener('focus', () => {
                refreshCurrentView();
            });
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                    refreshCurrentView();
                }
            });
        }

        // Initialize Firebase if config object exists on the page
        function initFirebaseIfConfigured() {
            try {
                const cfg = window.FIREBASE_CONFIG;
                if (!cfg || typeof cfg !== 'object') return;
                if (typeof firebase === 'undefined' || !firebase || !firebase.initializeApp) {
                    console.warn('Firebase SDK not available');
                    return;
                }
                try { firebase.initializeApp(cfg); } catch (e) { /* already initialized */ }
                firestoreDb = firebase.firestore();
                firebaseActive = true;
                setupFirebaseSync();
                console.log('Firebase sync initialized');
            } catch (e) {
                console.error('initFirebaseIfConfigured error', e);
            }
        }

        function setupFirebaseSync() {
            if (!firebaseActive || !firestoreDb) return;
            const docRef = firestoreDb.collection('vanguard').doc('transits');
            docRef.onSnapshot((snap) => {
                if (!snap || !snap.exists) return;
                const data = snap.data();
                if (!data) return;
                const ts = data.ts || 0;
                if (ts <= (window.lastFirebaseWrite || 0)) return; // ignore own writes
                try {
                    const remote = JSON.parse(data.payload || '[]');
                    localStorage.setItem('transits', JSON.stringify(remote));
                    handleRemoteUpdate('transits');
                    console.log('Updated transits from Firebase');
                } catch (e) {
                    console.error('Invalid Firebase payload', e);
                }
            }, (err) => console.error('Firebase snapshot error', err));
        }

        // Send transits to serverless ledger function (if configured)
        async function sendTransitsToLedger(transits) {
            const endpoint = window.FN_ENDPOINT;
            if (!endpoint) return null;
            try {
                const body = { transits, clientId: window.CLIENT_ID || 'web-client' };
                const resp = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                const data = await resp.json();
                if (data && data.ts) window.lastFirebaseWrite = data.ts;
                return data;
            } catch (e) {
                console.error('sendTransitsToLedger error', e);
                return null;
            }
        }

        function refreshCurrentView() {
            if (document.getElementById('adminDashboard')?.classList.contains('active')) {
                renderAdminDashboard();
            }
            if (document.getElementById('dataSection')?.classList.contains('active')) {
                renderDataSection();
            }
            if (document.getElementById('driverDashboard')?.classList.contains('active')) {
                renderDriverDashboard();
            }
            renderAdminAlerts();
        }

        function showToast(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            if (!container) return;
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('visible');
                setTimeout(() => {
                    toast.classList.remove('visible');
                    setTimeout(() => container.removeChild(toast), 300);
                }, 3000);
            }, 10);
        }

        function handleRemoteUpdate(key, notify = true) {
            const keys = ['transits', 'history', 'drivers', 'vehicles', 'users', 'alerts'];
            if (!keys.includes(key)) return;

            // If admin dashboard is active, refresh relevant views
            if (document.getElementById('adminDashboard') && document.getElementById('adminDashboard').classList.contains('active')) {
                renderAdminDashboard();
            }

            // If data section is active (admin), refresh
            if (document.getElementById('dataSection') && document.getElementById('dataSection').classList.contains('active')) {
                renderDataSection();
            }

            // If driver dashboard is active, refresh
            if (document.getElementById('driverDashboard') && document.getElementById('driverDashboard').classList.contains('active')) {
                renderDriverDashboard();
            }

            // If admin alerts present, refresh
            if (document.getElementById('adminAlerts')) {
                renderAdminAlerts();
            }

            if (notify) {
                showToast('Data synced from another tab', 'info');
            }
        }

        function exportAlertsCsv() {
            const alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
            if (!alerts.length) {
                showToast('No alerts to export', 'info');
                return;
            }
            const headers = ['ID', 'Timestamp', 'Type', 'Message', 'Meta'];
            const rows = alerts.map((a) => [
                a.id,
                a.ts,
                a.type,
                a.message.replace(/"/g, '""'),
                JSON.stringify(a.meta).replace(/"/g, '""')
            ]);
            const csv = [headers, ...rows]
                .map(r => r.map(cell => `"${cell}"`).join(','))
                .join('\r\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `vanguard-alerts-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            showToast('Alerts exported successfully', 'success');
        }

        function broadcastUpdate(key) {
            try {
                if (syncChannel) syncChannel.postMessage({ key });
            } catch (e) {
                // ignore
            }
            try {
                const payload = JSON.stringify({ key, ts: Date.now() });
                localStorage.setItem('vanguard-sync', payload);
            } catch (e) {
                // ignore
            }

            // If a serverless ledger endpoint is configured, post transits there (preferred for tamper-evident ledger)
            if (window.FN_ENDPOINT && key === 'transits') {
                try {
                    const transits = JSON.parse(localStorage.getItem('transits') || '[]');
                    // fire-and-forget; function will update canonical doc which clients listen to
                    sendTransitsToLedger(transits).catch && sendTransitsToLedger(transits);
                } catch (e) {
                    console.error('Failed to send transits to ledger endpoint', e);
                }
            } else if (firebaseActive && firestoreDb && key === 'transits') {
                try {
                    const transits = JSON.parse(localStorage.getItem('transits') || '[]');
                    const docRef = firestoreDb.collection('vanguard').doc('transits');
                    const ts = Date.now();
                    window.lastFirebaseWrite = ts;
                    docRef.set({ payload: JSON.stringify(transits), ts }, { merge: true }).catch(err => console.error('Firebase set error', err));
                } catch (e) {
                    console.error('Failed to write transits to Firebase', e);
                }
            }

            handleRemoteUpdate(key, false);
        }

        // Alerts logging
        function logAlert(type, message, meta = {}) {
            try {
                const alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
                const alert = {
                    id: Date.now(),
                    type,
                    message,
                    meta,
                    ts: new Date().toISOString()
                };
                alerts.push(alert);
                localStorage.setItem('alerts', JSON.stringify(alerts));
                broadcastUpdate('alerts');
                showToast(message, type === 'transit_hazard' ? 'error' : 'success');
            } catch (e) {
                console.error('Failed to log alert', e);
            }
        }

        function renderAdminAlerts() {
            const alerts = JSON.parse(localStorage.getItem('alerts') || '[]');
            const container = document.getElementById('adminAlerts');
            if (!container) return;
            const html = (alerts.slice().reverse().slice(0, 50)).map(a => `
                <div class="alert-item">
                    <strong>${a.type.replace(/_/g, ' ')}</strong>
                    <span>${a.message}</span>
                    <div style="font-size: 12px; color: var(--text-secondary);">${new Date(a.ts).toLocaleString()}</div>
                </div>
            `).join('') || `
                <div class="alert-item">
                    <strong>No alerts</strong>
                    <span>All systems are operating normally.</span>
                </div>
            `;
            container.innerHTML = html;
        }

        function isLegacyPlaceholderTransit(item) {
            return item &&
                item.status === 'completed' &&
                item.totalBudget === 0 &&
                item.departureDate && item.departureDate.startsWith('2026-06-19') &&
                item.driverName && item.driverName.toLowerCase().includes('robert') &&
                item.destination && item.destination.toUpperCase().includes('N/A');
        }

        function cleanLegacyTransitData() {
            const history = JSON.parse(localStorage.getItem('history') || '[]').filter(item => !isLegacyPlaceholderTransit(item));
            const transits = JSON.parse(localStorage.getItem('transits') || '[]').filter(item => !isLegacyPlaceholderTransit(item));
            localStorage.setItem('history', JSON.stringify(history));
            localStorage.setItem('transits', JSON.stringify(transits));
        }

        function initializeData() {
            cleanLegacyTransitData();
            if (!localStorage.getItem('drivers')) {
                const defaultDrivers = [
                    {
                        id: 1,
                        name: 'Robert Santos',
                        phone: '09171234567',
                        emergency: '09181234567',
                        lto: 'N01-12-345678',
                        locations: ['Baguio City, Benguet', 'San Fernando, La Union', 'Dagupan, Pangasinan'],
                        username: 'robert',
                        password: 'driver123',
                        available: true
                    },
                    {
                        id: 2,
                        name: 'Emma Garcia',
                        phone: '09172345678',
                        emergency: '09182345678',
                        lto: 'N01-12-456789',
                        locations: ['Manila, Metro Manila', 'Quezon City, Metro Manila', 'Makati, Metro Manila'],
                        username: 'emma',
                        password: 'driver123',
                        available: true
                    },
                    {
                        id: 3,
                        name: 'Liam Cruz',
                        phone: '09173456789',
                        emergency: '09183456789',
                        lto: 'N01-12-567890',
                        locations: ['Angeles, Pampanga', 'Tarlac City, Tarlac', 'Cabanatuan, Nueva Ecija'],
                        username: 'liam',
                        password: 'driver123',
                        available: true
                    }
                ];
                localStorage.setItem('drivers', JSON.stringify(defaultDrivers));
            }

            if (!localStorage.getItem('vehicles')) {
                const defaultVehicles = [
                    { id: 1, plate: 'AWS 114', model: 'Toyota Hiace Commuter', capacity: 15, available: true },
                    { id: 2, plate: 'AWS 115', model: 'Nissan Urvan Premium', capacity: 18, available: true },
                    { id: 3, plate: 'AWS 116', model: 'Toyota Grandia', capacity: 12, available: true }
                ];
                localStorage.setItem('vehicles', JSON.stringify(defaultVehicles));
            }

            if (!localStorage.getItem('transits')) {
                localStorage.setItem('transits', JSON.stringify([]));
            }

            if (!localStorage.getItem('history')) {
                localStorage.setItem('history', JSON.stringify([]));
            }

            if (!localStorage.getItem('users')) {
                const defaultUsers = [
                    { username: 'admin', password: 'admin123', role: 'admin' }
                ];
                localStorage.setItem('users', JSON.stringify(defaultUsers));
            }

            if (!localStorage.getItem('alerts')) {
                localStorage.setItem('alerts', JSON.stringify([]));
            }
        }

        function setupLoginForm() {
            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                // Check admin
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const admin = users.find(u => u.username === username && u.password === password);
                
                if (admin) {
                    currentUser = username;
                    currentRole = 'admin';
                    saveSession();
                    showApp();
                    return;
                }

                // Check drivers
                const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
                const driver = drivers.find(d => d.username === username && d.password === password);
                
                if (driver) {
                    currentUser = driver;
                    currentRole = 'driver';
                    saveSession();
                    showApp();
                    return;
                }

                alert('Invalid credentials');
            });
        }

        function showApp() {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('appContainer').classList.add('active');
            
            if (currentRole === 'admin') {
                setupAdminNav();
                showPage('adminDashboard');
            } else {
                setupDriverNav();
                showPage('driverDashboard');
                // Ensure availability toggle reflects current user
                updateDriverAvailabilityToggle();
            }
        }

        function updateDriverAvailabilityToggle() {
            const availToggle = document.getElementById('driverAvailableToggle');
            if (!availToggle) return;
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const d = currentRole === 'driver' && currentUser ? drivers.find(x => x.id === currentUser.id) : null;
            availToggle.checked = !!(d && d.available);
        }

        function saveSession() {
            localStorage.setItem(SESSION_KEY, JSON.stringify({
                role: currentRole,
                user: currentRole === 'admin' ? currentUser : currentUser.id
            }));
        }

        function clearSession() {
            localStorage.removeItem(SESSION_KEY);
        }

        function restoreSession() {
            const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
            if (!session) return;

            if (session.role === 'admin') {
                currentRole = 'admin';
                currentUser = session.user;
                showApp();
            } else if (session.role === 'driver') {
                const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
                const driver = drivers.find(d => d.id === session.user);
                if (driver) {
                    currentRole = 'driver';
                    currentUser = driver;
                    showApp();
                } else {
                    clearSession();
                }
            } else {
                clearSession();
            }
        }

        function setupAdminNav() {
            const nav = document.getElementById('sidebarNav');
            nav.innerHTML = `
                <div class="nav-item active" onclick="showPage('adminDashboard', event)">📊 Dashboard</div>
                <div class="nav-item" onclick="showPage('dataSection', event)">📁 Data</div>
            `;
        }

        function setupDriverNav() {
            const nav = document.getElementById('sidebarNav');
            nav.innerHTML = `
                <div class="nav-item active" onclick="showPage('driverDashboard', event)">📊 Dashboard</div>
                <div class="nav-item" onclick="openDriverProfile()">👤 Profile</div>
            `;
        }

        function openDriverProfile() {
            if (!currentUser || currentRole !== 'driver') {
                alert('You must be signed in as a driver to edit your profile');
                return;
            }
            editDriver(currentUser.id);
            // make it clear this is profile edit
            const title = document.getElementById('driverModalTitle');
            if (title) title.textContent = 'Edit Profile';
        }

        function showPage(pageId, event) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            const target = event ? event.target : document.querySelector(`.nav-item[onclick*="${pageId}"]`);
            if (target) {
                target.classList.add('active');
            }

            // Render page content
            if (pageId === 'adminDashboard') {
                renderAdminDashboard();
            } else if (pageId === 'dataSection') {
                renderDataSection();
            } else if (pageId === 'driverDashboard') {
                renderDriverDashboard();
            }

            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.add('hidden');
            }
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            if (!sidebar) return;
            sidebar.classList.toggle('hidden');
            // when overlay mode is active, add body helper class to shift content
            const isHidden = sidebar.classList.contains('hidden');
            if (document.body) {
                if (!isHidden) document.body.classList.add('sidebar-open');
                else document.body.classList.remove('sidebar-open');
            }
        }

        // Global open helper for left-edge toggle
        function openSidebarGlobal() {
            const sidebar = document.getElementById('sidebar');
            if (!sidebar) return;
            sidebar.classList.remove('hidden');
            document.body.classList.add('sidebar-open');
        }

        // Sidebar gesture / swipe handling
        function setupSidebarGestures() {
            const sidebar = document.getElementById('sidebar');
            if (!sidebar) return;

            let startX = null;
            let startY = null;
            const edgeThreshold = 40; // px from left edge to start a swipe
            const openThreshold = 80; // px movement to consider swipe

            function isOverlayMode() {
                // treat overlay mode for widths >= 768px (laptop/desktop)
                return window.innerWidth >= 768;
            }

            function openSidebar() {
                sidebar.classList.remove('hidden');
                document.body.classList.add('sidebar-open');
            }

            function closeSidebar() {
                sidebar.classList.add('hidden');
                document.body.classList.remove('sidebar-open');
            }

            // touch events
            document.addEventListener('touchstart', (e) => {
                if (!e.touches || !e.touches[0]) return;
                const t = e.touches[0];
                startX = t.clientX;
                startY = t.clientY;
            }, { passive: true });

            document.addEventListener('touchend', (e) => {
                if (startX === null) return;
                const t = e.changedTouches && e.changedTouches[0];
                if (!t) { startX = null; startY = null; return; }
                const dx = t.clientX - startX;
                const dy = Math.abs(t.clientY - startY);
                // ignore mostly-vertical gestures
                if (dy > 70) { startX = null; startY = null; return; }

                // open if swipe right from near left edge
                if (startX <= edgeThreshold && dx > openThreshold) {
                    openSidebar();
                } else if (!sidebar.classList.contains('hidden') && dx < -openThreshold) {
                    // close if swipe left
                    closeSidebar();
                }
                startX = null;
                startY = null;
            }, { passive: true });

            // pointer (mouse) events for desktop swipe-like gesture
            let pointerDown = false;
            document.addEventListener('pointerdown', (e) => {
                if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
                if (e.clientX > edgeThreshold && sidebar.classList.contains('hidden')) return;
                pointerDown = true;
                startX = e.clientX;
                startY = e.clientY;
            });

            document.addEventListener('pointerup', (e) => {
                if (!pointerDown) return;
                pointerDown = false;
                if (startX === null) return;
                const dx = e.clientX - startX;
                const dy = Math.abs(e.clientY - startY);
                if (dy > 70) { startX = null; startY = null; return; }

                if (startX <= edgeThreshold && dx > openThreshold) {
                    openSidebar();
                } else if (!sidebar.classList.contains('hidden') && dx < -openThreshold) {
                    closeSidebar();
                }

                startX = null; startY = null;
            });

            // close when tapping main content (mobile overlay mode)
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (!sidebar || sidebar.contains(el)) return;
                if (!sidebar.classList.contains('hidden') && window.innerWidth <= 1024) {
                    closeSidebar();
                }
            });

            // keep overlay mode in sync with window size
            function updateOverlayMode() {
                if (isOverlayMode()) {
                    sidebar.classList.add('overlay');
                    // hide by default in overlay mode so main content stays accessible
                    sidebar.classList.add('hidden');
                    document.body.classList.remove('sidebar-open');
                } else {
                    sidebar.classList.remove('overlay');
                    // ensure body class removed
                    document.body.classList.remove('sidebar-open');
                    sidebar.classList.remove('hidden');
                }
            }

            window.addEventListener('resize', updateOverlayMode);
            updateOverlayMode();

            // wire the left-edge toggle element
            const edge = document.getElementById('edgeToggle');
            if (edge) {
                edge.addEventListener('click', (e) => {
                    openSidebarGlobal();
                    e.stopPropagation();
                });
            }
        }

        // Remove any leftover visible menu buttons (defensive cleanup)
        function removeLeftoverMenuButtons() {
            try {
                const candidates = Array.from(document.querySelectorAll('button, a, div, span'));
                candidates.forEach(el => {
                    if (!el || !el.textContent) return;
                    const txt = el.textContent.trim();
                    if (txt === '☰ Menu' || txt === '☰' || txt === '\u2630 Menu' || /\u2630/.test(txt)) {
                        // hide rather than remove to avoid breaking scripts
                        el.style.display = 'none';
                    }
                });
            } catch (e) {
                // ignore
            }
        }

        function getStatusClass(status) {
            if (status === 'completed' || status === 'accepted') return 'success';
            if (status === 'pending') return 'warning';
            if (status === 'rejected' || status === 'hazard') return 'danger';
            return 'info';
        }

        function renderAdminDashboard() {
            
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            const transits = JSON.parse(localStorage.getItem('transits') || '[]').filter(t => !isLegacyPlaceholderTransit(t));
            const history = JSON.parse(localStorage.getItem('history') || '[]').filter(h => !isLegacyPlaceholderTransit(h));

            // Stats
            document.getElementById('activeDrivers').textContent = drivers.filter(d => d.available).length;
            document.getElementById('availableVehicles').textContent = vehicles.filter(v => v.available).length;
            
            const totalBudget = [...transits, ...history].reduce((sum, t) => sum + (t.totalBudget || 0), 0);
            document.getElementById('totalBudget').textContent = '₱' + totalBudget.toLocaleString();

            // Charts
            renderCharts(transits, history, drivers, vehicles);

            // Recent History
            const recent = history.slice(-10).reverse();
            const historyHTML = recent.map(t => `
                <tr>
                    <td>${t.departureDate || 'N/A'}</td>
                    <td>${t.driverName || 'N/A'}</td>
                    <td>${t.vehiclePlate || 'N/A'}</td>
                    <td>${t.destination || 'N/A'}</td>
                    <td><span class="badge badge-${t.status === 'completed' ? 'success' : 'warning'}">${t.status}</span></td>
                    <td>₱${(t.totalBudget || 0).toLocaleString()}</td>
                </tr>
            `).join('') || '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-secondary);">No history yet</td></tr>';
            
            document.getElementById('recentHistoryTable').innerHTML = historyHTML;

            // Admin Alerts
            renderAdminAlerts();
        }

        function renderCharts(transits, history, drivers, vehicles) {
            // Transit Status
            const pending = transits.filter(t => t.status === 'pending').length;
            const accepted = transits.filter(t => t.status === 'accepted').length;
            const completed = history.length;

            document.getElementById('transitStatusChart').innerHTML = `
                <div class="status-grid">
                    <div class="status-block">
                        <div class="status-label">Pending</div>
                        <div class="status-value">${pending}</div>
                    </div>
                    <div class="status-block">
                        <div class="status-label">Accepted</div>
                        <div class="status-value">${accepted}</div>
                    </div>
                    <div class="status-block">
                        <div class="status-label">Completed</div>
                        <div class="status-value">${completed}</div>
                    </div>
                </div>
            `;

            // Driver Performance
            const driverTrips = drivers.map(d => ({
                name: d.name.split(' ')[0],
                trips: history.filter(h => h.driverId === d.id).length
            })).sort((a, b) => b.trips - a.trips).slice(0, 4);

            const maxTrips = driverTrips.length ? Math.max(...driverTrips.map(d => d.trips)) : 1;
            document.getElementById('driverPerformanceChart').innerHTML = driverTrips.map(d => `
                <div class="chart-bar">
                    <div class="chart-label">${d.name}</div>
                    <div class="chart-bar-fill" style="width: ${(d.trips / maxTrips) * 100}%;">
                        ${d.trips} trips
                    </div>
                </div>
            `).join('') || '<div style="color: var(--text-secondary);">No completed trips yet.</div>';

            // Vehicle Utilization
            const vehicleStats = vehicles.map(v => {
                const trips = history.filter(h => h.vehicleId === v.id).length;
                const utilization = history.length ? Math.round((trips / history.length) * 100) : 0;
                return { plate: v.plate, utilization };
            });

            document.getElementById('vehicleUtilizationChart').innerHTML = vehicleStats.map(v => `
                <div class="chart-bar">
                    <div class="chart-label">${v.plate}</div>
                    <div class="chart-bar-fill" style="width: ${v.utilization}%;">
                        ${v.utilization}%
                    </div>
                </div>
            `).join('') || '<div style="color: var(--text-secondary);">No utilization data available.</div>';
        }

        function renderDataSection() {
            renderTransitsTable();
            renderDriversGrid();
            renderVehiclesGrid();
        }

        function renderTransitsTable() {
            const transits = JSON.parse(localStorage.getItem('transits') || '[]');
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            
            const html = transits.map(t => {
                const driver = drivers.find(d => d.id === t.driverId);
                const vehicle = vehicles.find(v => v.id === t.vehicleId);
                
                return `
                    <tr>
                        <td>#${t.id}</td>
                        <td>${driver ? driver.name : 'N/A'}</td>
                        <td>${vehicle ? vehicle.plate : 'N/A'}</td>
                        <td>${t.destination}</td>
                        <td>${t.passengers}</td>
                        <td><span class="badge badge-${t.status === 'completed' ? 'success' : 'warning'}">${t.status}</span></td>
                        <td>
                            <button class="btn btn-success" style="padding: 6px 12px; font-size: 12px; margin-right:6px;" onclick="completeTransit(${t.id})">
                                ✓ Done
                            </button>
                            <button class="btn btn-danger" style="padding: 6px 12px; font-size: 12px;" onclick="openRejectModal(${t.id})">
                                ✕ Reject
                            </button>
                        </td>
                    </tr>
                `;
            }).join('') || '<tr><td colspan="7" style="text-align: center; padding: 40px; color: var(--text-secondary);">No transits yet</td></tr>';
            
            document.getElementById('transitsTable').innerHTML = html;
        }

        function renderDriversGrid() {
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            
            const html = drivers.map(d => `
                <div class="data-card">
                    <div class="card-header">
                        <div class="card-title">${d.name}</div>
                        <div class="card-actions">
                            <button class="btn btn-primary" onclick="editDriver(${d.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteDriver(${d.id})">Delete</button>
                        </div>
                    </div>
                    <div class="card-details">
                        <div class="card-detail"><strong>Phone:</strong> ${d.phone}</div>
                        <div class="card-detail"><strong>LTO:</strong> ${d.lto}</div>
                        <div class="card-detail"><strong>Locations:</strong> ${d.locations ? d.locations.length : 0} areas</div>
                        <div class="card-detail">
                            <span class="badge badge-${d.available ? 'success' : 'danger'}">
                                ${d.available ? 'Available' : 'Unavailable'}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('') || '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No drivers yet</div>';
            
            document.getElementById('driversGrid').innerHTML = html;
        }

        function renderVehiclesGrid() {
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            
            const html = vehicles.map(v => `
                <div class="data-card">
                    <div class="card-header">
                        <div class="card-title">${v.plate}</div>
                        <div class="card-actions">
                            <button class="btn btn-primary" onclick="editVehicle(${v.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteVehicle(${v.id})">Delete</button>
                        </div>
                    </div>
                    <div class="card-details">
                        <div class="card-detail"><strong>Model:</strong> ${v.model}</div>
                        <div class="card-detail"><strong>Capacity:</strong> ${v.capacity} passengers</div>
                        <div class="card-detail">
                            <span class="badge badge-${v.available ? 'success' : 'danger'}">
                                ${v.available ? 'Available' : 'In Use'}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('') || '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No vehicles yet</div>';
            
            document.getElementById('vehiclesGrid').innerHTML = html;
        }

        function renderDriverDashboard() {
            
            const transits = JSON.parse(localStorage.getItem('transits') || '[]').filter(t => !isLegacyPlaceholderTransit(t));
            const history = JSON.parse(localStorage.getItem('history') || '[]').filter(h => !isLegacyPlaceholderTransit(h));
            
            const myTransits = transits.filter(t => t.driverId === currentUser.id);
            const myHistory = history.filter(h => h.driverId === currentUser.id);

            // Stats
            document.getElementById('driverTrips').textContent = myHistory.length;
            document.getElementById('driverEarnings').textContent = '₱' + (myHistory.reduce((sum, h) => sum + (h.totalBudget || 0), 0)).toLocaleString();
            document.getElementById('driverPending').textContent = myTransits.filter(t => t.status === 'pending').length;

            // Transits Table
            const html = myTransits.map(t => `
                <tr>
                    <td>${t.departureDate || 'N/A'}</td>
                    <td>${t.destination}</td>
                    <td>${t.passengers}</td>
                    <td>₱${(t.totalBudget || 0).toLocaleString()}</td>
                    <td><span class="badge badge-${getStatusClass(t.status)}">${t.status}</span></td>
                    <td>
                        ${t.status === 'pending' ? `
                            <button class="btn btn-success" style="padding: 6px 12px; font-size: 12px; margin-right:6px;" onclick="acceptTransit(${t.id})">
                                ✓ Accept
                            </button>
                        ` : t.status === 'accepted' ? `
                            <button class="btn btn-success" style="padding: 6px 12px; font-size: 12px; margin-right:6px;" onclick="completeTransit(${t.id})">
                                ✓ Complete
                            </button>
                        ` : ''}
                        ${t.status !== 'rejected' && t.status !== 'hazard' ? `
                            <button class="btn btn-danger" style="padding: 6px 12px; font-size: 12px;" onclick="openRejectModal(${t.id})">
                                ✕ Reject
                            </button>
                        ` : ''}
                    </td>
                </tr>
            `).join('') || '<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--text-secondary);">No transits assigned yet</td></tr>';
            
            document.getElementById('driverTransitsTable').innerHTML = html;
        }

        function acceptTransit(transitId) {
            let transits = JSON.parse(localStorage.getItem('transits') || '[]');
            const transit = transits.find(t => t.id === transitId);
            if (!transit) {
                alert('Transit not found');
                return;
            }

            transit.status = 'accepted';
            localStorage.setItem('transits', JSON.stringify(transits));
            broadcastUpdate('transits');
            if (document.getElementById('driverDashboard').classList.contains('active')) {
                renderDriverDashboard();
            }
            showToast(`Transit accepted: ${transit.destination}`);
        }

        function completeTransit(transitId) {
            
            let transits = JSON.parse(localStorage.getItem('transits') || '[]');
            const transit = transits.find(t => t.id === transitId);
            
            if (!transit) {
                alert('Transit not found');
                return;
            }

            transit.status = 'completed';
            transit.completedDate = new Date().toISOString();
            
            // Move to history
            let history = JSON.parse(localStorage.getItem('history') || '[]');
            history.push({...transit});
            localStorage.setItem('history', JSON.stringify(history));
            
            // Remove from transits
            transits = transits.filter(t => t.id !== transitId);
            localStorage.setItem('transits', JSON.stringify(transits));

            // Notify other tabs/windows
            broadcastUpdate('history');
            broadcastUpdate('transits');

            // Refresh current page
            if (currentRole === 'admin') {
                if (document.getElementById('adminDashboard').classList.contains('active')) {
                    renderAdminDashboard();
                } else {
                    renderDataSection();
                }
            } else {
                renderDriverDashboard();
            }

            alert('Transit marked as completed!');
            logAlert('transit_completed', `Transit completed: ${transit.destination} — Driver: ${transit.driverName}`, { transitId: transitId });
        }

        // Transit Modal Functions
        function openTransitModal() {
            transitData = {
                tripType: null,
                departureDate: null,
                returnDate: null,
                destination: null,
                passengers: null,
                vehicleId: null,
                driverId: null,
                gas: 0,
                food: 0,
                misc: 0
            };
            document.getElementById('transitModal').classList.add('active');
            showStep(1);
        }

        function showStep(stepNumber) {
            document.querySelectorAll('.step-container').forEach(s => s.classList.remove('active'));
            document.getElementById('step' + stepNumber).classList.add('active');
        }

        function selectTripType(type, event) {
            transitData.tripType = type;
            document.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
            const card = event ? event.target.closest('.choice-card') : null;
            if (card) {
                card.classList.add('selected');
            }
            
            setTimeout(() => {
                if (type === 'roundtrip') {
                    document.getElementById('returnDateGroup').style.display = 'block';
                } else {
                    document.getElementById('returnDateGroup').style.display = 'none';
                }
                showStep(2);
            }, 300);
        }

        function nextStep(stepNumber) {
            // Validate current step
            const currentStep = stepNumber - 1;
            
            if (currentStep === 2) {
                transitData.departureDate = document.getElementById('departureDate').value;
                if (!transitData.departureDate) {
                    alert('Please select departure date');
                    return;
                }
                if (transitData.tripType === 'roundtrip') {
                    transitData.returnDate = document.getElementById('returnDate').value;
                    if (!transitData.returnDate) {
                        alert('Please select return date');
                        return;
                    }
                }
            }
            
            if (currentStep === 3) {
                transitData.destination = document.getElementById('destinationInput').value;
                if (!transitData.destination) {
                    alert('Please select destination');
                    return;
                }
                filterDriversByDestination();
            }
            
            if (currentStep === 4) {
                transitData.passengers = parseInt(document.getElementById('passengerCount').value);
                if (!transitData.passengers || transitData.passengers < 1) {
                    alert('Please enter valid passenger count');
                    return;
                }
                filterVehiclesByCapacity();
            }
            
            if (currentStep === 5) {
                transitData.vehicleId = parseInt(document.getElementById('vehicleSelect').value);
                if (!transitData.vehicleId) {
                    alert('Please select vehicle');
                    return;
                }
            }
            
            if (currentStep === 6) {
                transitData.driverId = parseInt(document.getElementById('driverSelect').value);
                if (!transitData.driverId) {
                    alert('Please select driver');
                    return;
                }
            }
            
            showStep(stepNumber);
        }

        function prevStep(stepNumber) {
            showStep(stepNumber);
        }

        function filterDriversByDestination() {
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const select = document.getElementById('driverSelect');
            
            const filtered = drivers.filter(d => {
                return d.available && d.locations && d.locations.some(loc => 
                    loc.toLowerCase().includes(transitData.destination.toLowerCase())
                );
            });
            
            select.innerHTML = '<option value="">Select driver...</option>';
            filtered.forEach(d => {
                const option = document.createElement('option');
                option.value = d.id;
                option.textContent = `${d.name} (${d.phone})`;
                select.appendChild(option);
            });
            
            if (filtered.length === 0) {
                select.innerHTML = '<option value="">No drivers available for this destination</option>';
            }
        }

        function filterVehiclesByCapacity() {
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            const select = document.getElementById('vehicleSelect');
            
            const filtered = vehicles.filter(v => {
                return v.available && v.capacity >= transitData.passengers;
            });
            
            select.innerHTML = '<option value="">Select vehicle...</option>';
            filtered.forEach(v => {
                const option = document.createElement('option');
                option.value = v.id;
                option.textContent = `${v.plate} - ${v.model} (${v.capacity} seats)`;
                select.appendChild(option);
            });
            
            if (filtered.length === 0) {
                select.innerHTML = '<option value="">No vehicles available for this passenger count</option>';
            }
        }

        function setupAutocomplete() {
            const input = document.getElementById('destinationInput');
            const dropdown = document.getElementById('destinationDropdown');
            
            input.addEventListener('input', (e) => {
                const value = e.target.value.toLowerCase();
                
                if (value.length < 2) {
                    dropdown.classList.remove('active');
                    return;
                }
                
                const filtered = LUZON_LOCATIONS.filter(loc => 
                    loc.toLowerCase().includes(value)
                );
                
                if (filtered.length === 0) {
                    dropdown.classList.remove('active');
                    return;
                }
                
                dropdown.innerHTML = filtered.slice(0, 10).map(loc => `
                    <div class="autocomplete-item" onclick="selectDestination('${loc}')">${loc}</div>
                `).join('');
                
                dropdown.classList.add('active');
            });
            
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.autocomplete-container')) {
                    dropdown.classList.remove('active');
                }
            });
        }

        function selectDestination(location) {
            document.getElementById('destinationInput').value = location;
            document.getElementById('destinationDropdown').classList.remove('active');
        }

        function setupBudgetCalculator() {
            const gas = document.getElementById('gasBudget');
            const food = document.getElementById('foodBudget');
            const misc = document.getElementById('miscBudget');
            const total = document.getElementById('transitTotalBudget');
            
            function calculate() {
                const sum = (parseInt(gas.value) || 0) + (parseInt(food.value) || 0) + (parseInt(misc.value) || 0);
                total.value = '₱' + sum.toLocaleString();
                transitData.gas = parseInt(gas.value) || 0;
                transitData.food = parseInt(food.value) || 0;
                transitData.misc = parseInt(misc.value) || 0;
            }
            
            gas.addEventListener('input', calculate);
            food.addEventListener('input', calculate);
            misc.addEventListener('input', calculate);
        }

        function submitTransit() {
            
            const transits = JSON.parse(localStorage.getItem('transits') || '[]');
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            
            const driver = drivers.find(d => d.id === transitData.driverId);
            const vehicle = vehicles.find(v => v.id === transitData.vehicleId);
            
            const newTransit = {
                id: Date.now(),
                tripType: transitData.tripType,
                departureDate: transitData.departureDate,
                returnDate: transitData.returnDate,
                destination: transitData.destination,
                passengers: transitData.passengers,
                vehicleId: transitData.vehicleId,
                vehiclePlate: vehicle.plate,
                driverId: transitData.driverId,
                driverName: driver.name,
                totalBudget: transitData.gas + transitData.food + transitData.misc,
                gas: transitData.gas,
                food: transitData.food,
                misc: transitData.misc,
                status: 'pending',
                createdAt: new Date().toISOString()
            };
            
            transits.push(newTransit);
            localStorage.setItem('transits', JSON.stringify(transits));
            
            closeModal('transitModal');
            renderDataSection();
            broadcastUpdate('transits');
            logAlert('transit_created', `Transit created: ${newTransit.destination} — Driver: ${newTransit.driverName}`, { transitId: newTransit.id });
            alert('Transit created successfully!');
        }

        // Driver Modal Functions
        function openDriverModal() {
            editingDriverId = null;
            document.getElementById('driverModalTitle').textContent = 'Add Driver';
            document.getElementById('driverForm').reset();
            renderLocationCheckboxes();
            document.getElementById('driverModal').classList.add('active');
        }

        function editDriver(driverId) {
            editingDriverId = driverId;
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const driver = drivers.find(d => d.id === driverId);
            
            if (!driver) {
                alert('Driver not found');
                return;
            }
            
            document.getElementById('driverModalTitle').textContent = 'Edit Driver';
            document.getElementById('driverName').value = driver.name;
            document.getElementById('driverPhone').value = driver.phone;
            document.getElementById('driverEmergency').value = driver.emergency;
            document.getElementById('driverLTO').value = driver.lto;
            document.getElementById('driverUsername').value = driver.username;
            document.getElementById('driverPassword').value = driver.password;
            
            renderLocationCheckboxes(driver.locations || []);
            document.getElementById('driverModal').classList.add('active');
        }

        function renderLocationCheckboxes(selected = []) {
            const container = document.getElementById('locationCheckboxes');
            const searchInput = document.getElementById('locationSearch');
            const selectedLocations = new Set(selected);

            function updateSelectedCount() {
                document.getElementById('selectedCount').textContent = `${selectedLocations.size} locations selected`;
            }

            function render(filter = '') {
                const filtered = LUZON_LOCATIONS.filter(loc => 
                    loc.toLowerCase().includes(filter.toLowerCase())
                );
                
                container.innerHTML = filtered.map(loc => `
                    <div class="location-checkbox">
                        <input type="checkbox" id="loc_${loc.replace(/[^a-z0-9]/gi, '_')}" value="${loc}" ${selectedLocations.has(loc) ? 'checked' : ''}>
                        <label for="loc_${loc.replace(/[^a-z0-9]/gi, '_')}">${loc}</label>
                    </div>
                `).join('');
                
                updateSelectedCount();
            }
            
            searchInput.oninput = (e) => {
                render(e.target.value);
            };
            
            container.onchange = (e) => {
                const checkbox = e.target;
                if (checkbox.type === 'checkbox') {
                    if (checkbox.checked) {
                        selectedLocations.add(checkbox.value);
                    } else {
                        selectedLocations.delete(checkbox.value);
                    }
                    updateSelectedCount();
                }
            };
            
            render(searchInput.value || '');
        }

        function updateSelectedCount() {
            const checked = document.querySelectorAll('#locationCheckboxes input[type="checkbox"]:checked');
            document.getElementById('selectedCount').textContent = `${checked.length} locations selected`;
        }

        document.getElementById('driverForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const checkedLocations = Array.from(
                document.querySelectorAll('#locationCheckboxes input[type="checkbox"]:checked')
            ).map(cb => cb.value);
            
            if (checkedLocations.length === 0) {
                alert('Please select at least one service area');
                return;
            }
            
            const driverData = {
                name: document.getElementById('driverName').value,
                phone: document.getElementById('driverPhone').value,
                emergency: document.getElementById('driverEmergency').value,
                lto: document.getElementById('driverLTO').value,
                locations: checkedLocations,
                username: document.getElementById('driverUsername').value,
                password: document.getElementById('driverPassword').value,
                available: true
            };
            
            let drivers = JSON.parse(localStorage.getItem('drivers') || '[]');

            if (editingDriverId) {
                const index = drivers.findIndex(d => d.id === editingDriverId);
                drivers[index] = { ...drivers[index], ...driverData };
                // If the current user edited their own profile, update in-memory object
                if (currentRole === 'driver' && currentUser && currentUser.id === editingDriverId) {
                    currentUser = drivers[index];
                    saveSession();
                }
                logAlert('driver_updated', `Driver updated: ${driverData.name}`, { driverId: editingDriverId });
            } else {
                driverData.id = Date.now();
                drivers.push(driverData);
                logAlert('driver_added', `Driver added: ${driverData.name}`, { driverId: driverData.id });
            }

            localStorage.setItem('drivers', JSON.stringify(drivers));
            closeModal('driverModal');
            renderDataSection();
            broadcastUpdate('drivers');
            alert(editingDriverId ? 'Driver updated!' : 'Driver added!');
        });

        function deleteDriver(driverId) {
            if (!confirm('Are you sure you want to delete this driver?')) return;
            
            let drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const driver = drivers.find(d => d.id === driverId);
            drivers = drivers.filter(d => d.id !== driverId);
            localStorage.setItem('drivers', JSON.stringify(drivers));
            
            renderDataSection();
            broadcastUpdate('drivers');
            if (driver) logAlert('driver_deleted', `Driver deleted: ${driver.name}`, { driverId });
        }

        // Vehicle Modal Functions
        function openVehicleModal() {
            editingVehicleId = null;
            document.getElementById('vehicleModalTitle').textContent = 'Add Vehicle';
            document.getElementById('vehicleForm').reset();
            document.getElementById('vehicleModal').classList.add('active');
        }

        function editVehicle(vehicleId) {
            editingVehicleId = vehicleId;
            const vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            const vehicle = vehicles.find(v => v.id === vehicleId);
            
            if (!vehicle) {
                alert('Vehicle not found');
                return;
            }
            
            document.getElementById('vehicleModalTitle').textContent = 'Edit Vehicle';
            document.getElementById('vehiclePlate').value = vehicle.plate;
            document.getElementById('vehicleModel').value = vehicle.model;
            document.getElementById('vehicleCapacity').value = vehicle.capacity;
            
            document.getElementById('vehicleModal').classList.add('active');
        }

        document.getElementById('vehicleForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const vehicleData = {
                plate: document.getElementById('vehiclePlate').value,
                model: document.getElementById('vehicleModel').value,
                capacity: parseInt(document.getElementById('vehicleCapacity').value),
                available: true
            };
            
            let vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');

            if (editingVehicleId) {
                const index = vehicles.findIndex(v => v.id === editingVehicleId);
                vehicles[index] = { ...vehicles[index], ...vehicleData };
                logAlert('vehicle_updated', `Vehicle updated: ${vehicleData.plate}`, { vehicleId: editingVehicleId });
            } else {
                vehicleData.id = Date.now();
                vehicles.push(vehicleData);
                logAlert('vehicle_added', `Vehicle added: ${vehicleData.plate}`, { vehicleId: vehicleData.id });
            }

            localStorage.setItem('vehicles', JSON.stringify(vehicles));
            closeModal('vehicleModal');
            renderDataSection();
            broadcastUpdate('vehicles');
            alert(editingVehicleId ? 'Vehicle updated!' : 'Vehicle added!');
        });

        function deleteVehicle(vehicleId) {
            if (!confirm('Are you sure you want to delete this vehicle?')) return;
            
            let vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]');
            const vehicle = vehicles.find(v => v.id === vehicleId);
            vehicles = vehicles.filter(v => v.id !== vehicleId);
            localStorage.setItem('vehicles', JSON.stringify(vehicles));
            
            renderDataSection();
            broadcastUpdate('vehicles');
            if (vehicle) logAlert('vehicle_deleted', `Vehicle deleted: ${vehicle.plate}`, { vehicleId });
        }

        function setupModals() {
            // Close modal when clicking outside
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
            });

            // Hook reject modal 'Other' checkbox
            const otherChk = document.getElementById('rejectReasonOtherChk');
            if (otherChk) {
                otherChk.onchange = (e) => {
                    const el = document.getElementById('rejectOtherInput');
                    if (el) el.style.display = e.target.checked ? 'block' : 'none';
                };
            }

            // Hook driver availability toggle
            const availToggle = document.getElementById('driverAvailableToggle');
            if (availToggle) {
                // set initial state based on currentUser when available
                const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
                const d = currentRole === 'driver' && currentUser ? drivers.find(x => x.id === currentUser.id) : null;
                if (d) availToggle.checked = !!d.available;
                availToggle.onchange = () => toggleDriverAvailability(availToggle.checked);
            }
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // Reject flow
        function openRejectModal(transitId) {
            rejectingTransitId = transitId;
            // clear previous selections
            document.querySelectorAll('#rejectModal .reject-reason').forEach(chk => chk.checked = false);
            const otherInput = document.getElementById('rejectOtherInput');
            if (otherInput) otherInput.style.display = 'none';
            const otherText = document.getElementById('rejectOtherText');
            if (otherText) otherText.value = '';
            document.getElementById('rejectModal').classList.add('active');
        }

        function submitReject() {
            const reasons = Array.from(document.querySelectorAll('#rejectModal .reject-reason:checked')).map(cb => cb.value);
            if (reasons.length === 0) {
                alert('Please select at least one reason');
                return;
            }
            const otherChk = document.getElementById('rejectReasonOtherChk');
            if (otherChk && otherChk.checked) {
                const otherText = document.getElementById('rejectOtherText').value.trim();
                if (otherText) reasons.push(otherText);
            }
            closeModal('rejectModal');
            processReject(rejectingTransitId, reasons);
        }

        function processReject(transitId, reasons) {
            let transits = JSON.parse(localStorage.getItem('transits') || '[]');
            const idx = transits.findIndex(t => t.id === transitId);
            if (idx === -1) {
                alert('Transit not found');
                return;
            }
            const transit = transits[idx];
            transit.rejections = transit.rejections || [];
            transit.rejections.push({ driverId: currentUser.id, driverName: currentUser.name, reasons, ts: new Date().toISOString() });

            // remove assigned driver before reassignment
            transit.driverId = null;
            transit.driverName = '';
            
            // persist rejection history
            transits[idx] = transit;
            localStorage.setItem('transits', JSON.stringify(transits));
            broadcastUpdate('transits');
            logAlert('transit_rejected', `Transit ${transit.destination} rejected by ${currentUser.name}: ${reasons.join('; ')}`, { transitId, reasons, driverId: currentUser.id });

            // Attempt reassignment, excluding all drivers who already rejected this transit
            reassignTransit(transit);
        }

        function reassignTransit(transit) {
            const drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const rejectedIds = (transit.rejections || []).map(r => r.driverId);
            const candidates = drivers.filter(d => d.available && !rejectedIds.includes(d.id) && d.locations && d.locations.some(loc => loc.toLowerCase().includes((transit.destination || '').toLowerCase())));
            
            if (candidates.length > 0) {
                const next = candidates[0];
                let transits = JSON.parse(localStorage.getItem('transits') || '[]');
                const tIdx = transits.findIndex(t => t.id === transit.id);
                if (tIdx !== -1) {
                    transits[tIdx].driverId = next.id;
                    transits[tIdx].driverName = next.name;
                    transits[tIdx].status = 'pending';
                    localStorage.setItem('transits', JSON.stringify(transits));
                    broadcastUpdate('transits');
                    logAlert('transit_reassigned', `Transit ${transit.destination} reassigned to ${next.name}`, { transitId: transit.id, newDriverId: next.id });
                    return;
                }
            }

            // No candidate found => final rejected transit for admin review
            let transitsAll = JSON.parse(localStorage.getItem('transits') || '[]');
            const tIndex = transitsAll.findIndex(t => t.id === transit.id);
            if (tIndex !== -1) {
                transitsAll[tIndex].status = 'rejected';
                localStorage.setItem('transits', JSON.stringify(transitsAll));
            }
            broadcastUpdate('transits');
            logAlert('transit_finally_rejected', `Transit ${transit.destination} was rejected by all available drivers and requires admin review`, { transitId: transit.id });
        }

        // Driver availability toggle
        function toggleDriverAvailability(available) {
            if (!currentUser || currentRole !== 'driver') return;
            let drivers = JSON.parse(localStorage.getItem('drivers') || '[]');
            const idx = drivers.findIndex(d => d.id === currentUser.id);
            if (idx === -1) return;
            drivers[idx].available = !!available;
            localStorage.setItem('drivers', JSON.stringify(drivers));
            currentUser = drivers[idx];
            saveSession();
            broadcastUpdate('drivers');
            logAlert('driver_availability', `${currentUser.name} set availability to ${available ? 'available' : 'unavailable'}`, { driverId: currentUser.id });
        }

        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                currentUser = null;
                currentRole = null;
                clearSession();
                document.getElementById('appContainer').classList.remove('active');
                document.getElementById('loginContainer').style.display = 'flex';
                document.getElementById('loginForm').reset();
            }
        }
