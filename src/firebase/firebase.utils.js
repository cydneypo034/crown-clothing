import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyCOCYpADLZj1xs9aaoUA_Txs6_CWPW_1Qw",
        authDomain: "crown-db-3244f.firebaseapp.com",
        databaseURL: "https://crown-db-3244f.firebaseio.com",
        projectId: "crown-db-3244f",
        storageBucket: "crown-db-3244f.appspot.com",
        messagingSenderId: "341323896166",
        appId: "1:341323896166:web:0480c1305f6dc59138e4a7",
        measurementId: "G-BPZVZ8QMSC"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;