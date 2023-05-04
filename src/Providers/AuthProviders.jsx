import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  // Register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign In
  const loggedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // GitHub sign In
  const gitHubSignIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const authInfo = { createUser, loggedInUser, googleSignIn, gitHubSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
