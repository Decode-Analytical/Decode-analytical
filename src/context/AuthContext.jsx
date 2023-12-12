import { createContext, useReducer, useEffect, useState } from "react";


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {user: action.payload, token: action.payload.token }
        case 'LOGOUT':
                return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null,
    //     token: null,
    // })
// this is used to check if the local storage values exist,this run imediate the page load
    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('user'))

    //     if (user) {
    //         dispatch({type: 'LOGIN', payload: user})
    //     }
        
    // }, [])
   
    return(
        <AuthContext.Provider value={{auth, setAuth}}> 
            { children }
        </AuthContext.Provider>
    )
}