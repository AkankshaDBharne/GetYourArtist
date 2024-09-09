import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Firebase Storage
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD_hP7z3OgDsQNw478xmzyOvD0ZErE9k0",
  authDomain: "get-your-artist.firebaseapp.com",
  projectId: "get-your-artist",
  storageBucket: "get-your-artist.appspot.com",
  messagingSenderId: "894982694582",
  appId: "1:894982694582:web:1fb6ba7fdf4f775eb02817",
  measurementId: "G-VCH3G9BE6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Firebase Storage
const analytics = getAnalytics(app);

// Export modules for use in other parts of the application
export {
  app,
  auth,
  db, // Export Firestore instance
  storage, // Export Firebase Storage instance
  analytics,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};
