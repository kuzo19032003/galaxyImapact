import { createContext } from 'react'


const AuthContext = createContext()


export function AuthProvider ({children}){
    const login = () => {console.log('login')};
    
    const register = () => {console.log('login')};
    const logout = () => {console.log('login')};

    return (
        <AuthContext.Provider value={{login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}