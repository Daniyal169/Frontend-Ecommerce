import { createContext, useContext } from "react";


export const AuthContext = createContext({
    isAuthenticated: false,
    user: null,
    login: () => { },
    signup: () => { },
    logout: () => { },
})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = AuthContext.Provider;