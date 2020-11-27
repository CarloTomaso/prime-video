import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1vcjlguVPRCjtdDoemSFg2ygoUbm8cOc",
    authDomain: "prime-video-fake.firebaseapp.com",
    databaseURL: "https://prime-video-fake.firebaseio.com",
    projectId: "prime-video-fake",
    storageBucket: "prime-video-fake.appspot.com",
    messagingSenderId: "301461760007",
    appId: "1:301461760007:web:dc96f11c3180eb9b95e2a2",
    measurementId: "G-M50PL46KNZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase