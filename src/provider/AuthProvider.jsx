import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const authInfo = { name: "sagor khal bil" };

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
