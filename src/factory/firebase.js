import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
	apiKey: 'AIzaSyBIy5eYLzIJ1km7SVGgy_m6WyJSIMP_4gg',
	authDomain: 'lost-pets-af-2ada0.firebaseapp.com',
	projectId: 'lost-pets-af-2ada0',
	storageBucket: 'lost-pets-af-2ada0.appspot.com',
	messagingSenderId: '181692403576',
	appId: '1:181692403576:web:66c0853e4de03dbc8e428d'
});

export function getFirebase() {
	return app;
}
export function getFirestore() {
	return firebase.firestore(app);
}
