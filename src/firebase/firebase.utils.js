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
    const users = firestore.collection('users');
    const collectionSnapShot = await users.get();
    // console.log(collectionSnapShot);
    if(!collectionSnapShot.empty){
         console.log(collectionSnapShot.docs);
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); // here user1 = query Reference object
    const snapShot = await userRef.get();   //  using user1.get() we get the snapshot object from the reference object

    if(!snapShot.exists){  // snapShot.exists tells us if a document exists at this query (user id) and returns a bool.
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({  // .set() is a document reference method  used for CRUD operations.
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log(`user not added to database, ${e.message}`)
        }
    }
    // else{
    //     const { displayName, email } = userAuth;
    //     try{
    //         await user1.update({
    //             displayName : 'Ram',
    //             email : 'ram26@gmail.com'
    //         })
    //     }catch (e) {
    //         console.log(`user not updated in database, ${e.message}`)
    //     }
    // }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
