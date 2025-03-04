import { createContext, useContext, useReducer } from 'react'


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
    const login = () => {console.log('login')};
    
    const register = () => {console.log('login')};
    const logout = () => {console.log('login')};

    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}