import { createContext, useContext, useEffect, useReducer } from 'react'

import { loginAcc } from "../../services/authService/authservice";
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//useReducer

//trạng thái ban đầu
const initialState = {
    isAuthenticated: false,
    user: null,
}

//Reducer quản lí hành động

function AuthReducer(state,action) {
    switch (action.type){
        case 'LOGIN':
            return {
                isAuthenticated: true,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}


export function AuthProvider ({children}){
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    
    const loginAccount = async (username,password) => {



        const result = await loginAcc(username,password)
        if(result.success){
            dispatch({type:'LOGIN', payload: username})
        }
        return result
    };

    const register = () => {console.log('login')};
    const logout = () => {
        localStorage.removeItem("token")
        dispatch({type:'LOGOUT'})
    };

    return (
        <AuthContext.Provider value={{...state, loginAccount, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}