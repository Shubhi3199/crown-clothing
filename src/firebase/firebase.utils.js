import firebase from "firebase/app";    // base import
import 'firebase/firestore';            // to get storage for database
import 'firebase/auth';                // to get oauth authentication

const config = {
    apiKey: "AIzaSyBjw5M2r7hSHXPXkKyOcUxvQhMsVkwHDs8",
    authDomain: "crown-cloathing-db.firebaseapp.com",
    databaseURL: "https://crown-cloathing-db.firebaseio.com",
    projectId: "crown-cloathing-db",
    storageBucket: "crown-cloathing-db.appspot.com",
    messagingSenderId: "780310351688",
    appId: "1:780310351688:web:0fe100d20f09ac47c1ed7d",
    measurementId: "G-H61019XKDP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
