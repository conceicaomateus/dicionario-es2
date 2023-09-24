import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmm58L-RdtwodrleyWNivW1x6ASQRkYu4",
	authDomain: "dicionario-fe52f.firebaseapp.com",
	projectId: "dicionario-fe52f",
	storageBucket: "dicionario-fe52f.appspot.com",
	messagingSenderId: "1063423024431",
	appId: "1:1063423024431:web:fcfadadd0ad75c884295da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
