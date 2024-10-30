import React from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false)

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


export function useAuth () {
    return useContext(AuthContext)
}
