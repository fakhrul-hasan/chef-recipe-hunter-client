import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        return signOut(auth);
    }
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return unsubscribe;
    },[])
    const authInfo = {
        createUser,
        login,
        logout,
        user,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;