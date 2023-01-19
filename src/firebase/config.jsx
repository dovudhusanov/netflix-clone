import firebase from "firebase";
import "firebase/auth"

const config = firebase.initializeApp({
    apiKey: "AIzaSyADBBv8casNyCTdf9yt0gBryJC71Q9CZEg",
    authDomain: "auth-for-netflix.firebaseapp.com",
    projectId: "auth-for-netflix",
    storageBucket: "auth-for-netflix.appspot.com",
    messagingSenderId: "450093291378",
    appId: "1:450093291378:web:7b9dd978f455859778afeb",
    measurementId: "G-BCNF21469Z"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default config