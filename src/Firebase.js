import * as firebase from 'firebase';

const settings = {
    timestampsInSnapshots: true
};

const config = {
    apiKey: "AIzaSyB4FQSUq5yueyaIDpqV4yuqmmtn17w-4M0",
    authDomain: "damding-42450.firebaseapp.com",
    databaseURL: "https://damding-42450.firebaseio.com",
    projectId: "damding-42450",
    storageBucket: "damding-42450.appspot.com",
    messagingSenderId: "35981381532",
    appId: "1:35981381532:web:40df41e3c6151c95e28259",
    measurementId: "G-RVRD2P7N9T"
};
firebase.initializeApp(config);

firebase
    .firestore()
    .settings(settings);

// google login api
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;