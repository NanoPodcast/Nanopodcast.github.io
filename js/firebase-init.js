/* ==========================================================================
   NanoPod — Firebase initialization

   Fill in the values below from your Firebase project:
   Firebase Console → Project settings (gear icon) → General tab →
   "Your apps" → the web app → SDK setup and configuration → Config.

   This file is loaded by every page (public pages AND admin.html), so
   it must come after the firebase-*-compat.js <script> tags and before
   any other script that uses `db`, `auth`, or `storage`.
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyAD_mLuQ2VsEC2avOzjOCQG4eUz1YzYHmI",
  authDomain: "nanopod-714f0.firebaseapp.com",
  projectId: "nanopod-714f0",
  storageBucket: "nanopod-714f0.firebasestorage.app",
  messagingSenderId: "478903273257",
  appId: "1:478903273257:web:0467edf247b3bf8abfd938",
  measurementId: "G-88VW7YLJ22"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
/* Storage is intentionally not initialized — photos are compressed
   client-side and stored directly in Firestore instead, so this site
   works entirely on Firebase's free Spark plan with no billing setup. */

/* ---------- Analytics (optional) ----------
   Only initializes if measurementId is set above AND the
   firebase-analytics-compat.js script tag is present on this page
   (it isn't loaded on admin.html — no need to track your own visits).
   window.trackEvent() is always safe to call from anywhere else in the
   codebase; it's a no-op until both of those are true. */
let analytics = null;
if (firebaseConfig.measurementId && typeof firebase.analytics === "function") {
  try {
    analytics = firebase.analytics();
  } catch (err) {
    console.warn("Analytics didn't initialize:", err.message);
  }
}
window.trackEvent = function (name, params) {
  try {
    if (analytics) analytics.logEvent(name, params || {});
  } catch (err) {
    /* never let analytics break the page */
  }
};
