import React, { createContext, useContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const updateUserDetails=(name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe;
    },[])
    const authInfo = {
        createUser,
        login,
        logout,
        user,
        googleLogin,
        githubLogin,
        loading,
        setLoading,
        updateUserDetails
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;