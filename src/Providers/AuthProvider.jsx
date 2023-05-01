import React, { createContext, useContext } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = 'Kadir';
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;