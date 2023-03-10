import * as firebase from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, getDoc, doc, updateDoc, query, orderBy, where, deleteDoc } from 'firebase/firestore';
import 'firebase/analytics'

export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_ID,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

};

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db, addDoc, collection, getDocs, getDoc, updateDoc, doc, query, orderBy, where, deleteDoc }