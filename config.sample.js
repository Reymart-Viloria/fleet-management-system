// Copy this file to config.js in the site root and fill in the values before deploying or hosting the site.
// Do NOT commit your real API keys or secrets into a public repository.

// Example Firebase web config. Replace the placeholder strings with your project's values.
window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// HTTP function endpoint created when you deploy the provided Cloud Function.
// Example: https://us-central1-yourproject.cloudfunctions.net/appendTransit
window.FN_ENDPOINT = "https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/appendTransit";

// Optional client identifier
window.CLIENT_ID = "web-client";
