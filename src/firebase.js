import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCuXTtE5Qn3bW81saAd8CVRdA_eOQIoau4",
    authDomain: "disneyplus-clone-ba7d4.firebaseapp.com",
    projectId: "disneyplus-clone-ba7d4",
    storageBucket: "disneyplus-clone-ba7d4.appspot.com",
    messagingSenderId: "113702855620",
    appId: "1:113702855620:web:70a9276413288d288d3a91",
    measurementId: "G-0HYLNLE9N2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;