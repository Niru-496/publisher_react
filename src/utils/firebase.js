
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAANIEj5Q_Y7EvBYNtwnIRR2WuArTXLm0g",
	authDomain: "publishers-8695b.firebaseapp.com",
	projectId: "publishers-8695b",
	storageBucket: "publishers-8695b.appspot.com",
	messagingSenderId: "266110723432",
	appId: "1:266110723432:web:22f21369f9f487dde9e2dd",
	measurementId: "G-6F5WL8VTBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export { storage, app ,analytics};