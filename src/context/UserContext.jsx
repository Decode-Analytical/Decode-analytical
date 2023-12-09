import { createContext,  useState } from "react";


export const AuthContext = createContext()

// export const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {user: action.payload}
//         case 'LOGOUT':
//                 return {user: null}
//         default:
//             return state
//     }
// }

// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, {
//         user: null
//     })
// // this is used to check if the local storage values exist,this run imediate the page load
//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem('user'))

//         if (user) {
//             dispatch({type: 'LOGIN', payload: user})
//         }
        
//     }, [])
   
//     return(
//         <AuthContext.Provider value={{...state, dispatch}}> 
//             { children }
//         </AuthContext.Provider>
//     )
// }

export const UserContext = ({ children }) => {
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthContext