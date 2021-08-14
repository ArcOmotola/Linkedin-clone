import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4-PvUBfx3KJX6BaHtP2EwGEUxjfmE25w",
    authDomain: "linked-in-clone-64a95.firebaseapp.com",
    projectId: "linked-in-clone-64a95",
    storageBucket: "linked-in-clone-64a95.appspot.com",
    messagingSenderId: "290430848765",
    appId: "1:290430848765:web:7ac36517c2daf52914f894",
    measurementId: "G-2JT7K8RSHJ"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
