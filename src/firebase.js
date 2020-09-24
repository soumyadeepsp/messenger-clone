import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6rTr3sZUN2cfEib8KBdc5oh5hB5aoOBI",
    authDomain: "messenger-clone-92f21.firebaseapp.com",
    databaseURL: "https://messenger-clone-92f21.firebaseio.com",
    projectId: "messenger-clone-92f21",
    storageBucket: "messenger-clone-92f21.appspot.com",
    messagingSenderId: "1066544436980",
    appId: "1:1066544436980:web:b76b05b149dcff55dc70a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};