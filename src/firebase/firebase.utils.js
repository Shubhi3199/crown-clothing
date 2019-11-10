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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return ;
    const user1 = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await user1.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await user1.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log(`user not added to database, ${e.message}`)
        }
    }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
