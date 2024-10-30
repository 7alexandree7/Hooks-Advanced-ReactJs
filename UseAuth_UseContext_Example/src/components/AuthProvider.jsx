import React from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        console.log('Logging in...');
        setIsAuthenticated(true);
        console.log('User is authenticated:', true);
    };

    const logout = () => {
        console.log('Logging out...');
        setIsAuthenticated(false);
        console.log('User is authenticated:', false);
    };

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth() {
    return useContext(AuthContext)
}
