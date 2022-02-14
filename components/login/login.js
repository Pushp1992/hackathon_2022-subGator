// initialization of firebase

// const firebase = require('firebase/app');
// const { getAnalytics } = require("firebase/analytics");

const firebase  = require('firebase/app');
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyCWaF_Hu3t5h0-ke7dWM9OfRS9UGWaPzI4',
    authDomain: 'subgator-8fa8d.firebaseapp.com',
    projectId: 'subgator-8fa8d',
    messagingSenderId: "374602188217",
    appId: "1:374602188217:web:ef3e0927860606c8ece268",
    measurementId: "G-TG0KE2H76M"
};

// firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
// const app =  initializeApp(config);

const auth = firebase.auth();

export { auth, firebase }
