// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBf_zH8pOBWeCMLnWqSyGkKEMPBJr8Yapg",
	authDomain: "auth-moha-milon-d8d81.firebaseapp.com",
	projectId: "auth-moha-milon-d8d81",
	storageBucket: "auth-moha-milon-d8d81.appspot.com",
	messagingSenderId: "1057693011439",
	appId: "1:1057693011439:web:61cbcc22a97ebf825b3a1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;