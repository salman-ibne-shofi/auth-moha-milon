import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};


	const authInfo = { user, createUser, signInUser };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.PropTypes = {
	children: PropTypes.node,
};

/***
 * 1. create context and export it
 * 2. set provier with value
 * 3. use the auth provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider
 *
 * ***/
