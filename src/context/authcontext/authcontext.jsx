import { createContext, useContext, useEffect, useReducer } from 'react'

import { loginAcc,register } from "../../services/authService/authservice";
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
        case 'REGISTER':
            return {
                isAuthenticated: false,
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
            dispatch({type:'LOGIN', payload: result.users})
        }
        return result
    };
    useEffect(()=>{
        const tokenStore = localStorage.getItem("token")
        const userStore = localStorage.getItem("user")
        if(tokenStore && userStore){
            dispatch({type:'LOGIN', payload: JSON.parse(userStore)})
        }
    },[])

    const registerAccout = async (username,password,fullName,gender,dateOfBirth,email) => {
        const result = await register(username,password,fullName,gender,dateOfBirth,email)
        if(result.success){
            dispatch({type:'REGISTER', payload: username})
        }
        return result
    };
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch({type:'LOGOUT'})
    };

    return (
        <AuthContext.Provider value={{...state, loginAccount, registerAccout, logout}}>
            {children}
        </AuthContext.Provider>
    )
}