import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;