const firebase = require('firebase');

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let database = firebase.database();
let database = null;

module.exports = database;
