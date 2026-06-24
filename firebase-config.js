// firebase-config.js
// Esporta SOLO la configurazione. L'inizializzazione di Firebase
// avviene una sola volta in index.html (initializeApp).
// NON importare "firebase/app" qui: nel browser senza bundler/import-map
// quel bare specifier va in errore e blocca tutta l'app.

export const firebaseConfig = {
    apiKey: "AIzaSyBG_IvXBWYQTdthtFizqsWS6m0SAo5HFt0",
    authDomain: "faidatelaprenotazioni.firebaseapp.com",
    databaseURL: "https://faidatelaprenotazioni-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "faidatelaprenotazioni",
    storageBucket: "faidatelaprenotazioni.firebasestorage.app",
    messagingSenderId: "366280427978",
    appId: "1:366280427978:web:58769fd1402e5ff5446733"
};
