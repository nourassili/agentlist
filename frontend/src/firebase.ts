import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHSh4dbIWUx2zF_becF2RcyxNKpeDMt6M",
  authDomain: "agentlist-22c4d.firebaseapp.com",
  databaseURL: "https://agentlist-22c4d-default-rtdb.firebaseio.com",
  projectId: "agentlist-22c4d",
  storageBucket: "agentlist-22c4d.firebasestorage.app",
  messagingSenderId: "412385337270",
  appId: "1:412385337270:web:238d2411ebb0cb7c2eab17",
  measurementId: "G-WXWSDHNPVH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
