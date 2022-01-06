import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyC-ra7bkyF_iHMnJNjcr5nVjzfJZHV6yrM",
    authDomain: "idea-manager-95ccc.firebaseapp.com",
    databaseURL: "https://ideamanager-95ccc.firebaseio.com",
    projectId: "idea-manager-95ccc",
    storageBucket: "idea-manager-95ccc.appspot.com",
    messagingSenderId: "224116904279"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
