import { useState } from "react";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
// import { ErrorToast, SuccessToast } from "../utils/toast";
// import { setHasDisplayedTokenError } from "../utils/errorFlag";

export const useLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  // isloading is used on buton
  const [isLoading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();
  const baseURL = 'https://server-eight-beige.vercel.app/api/'

  const login = async (email, password, role) => {
    setIsloading(true);
    setError(null);
    let response;

    if (role == "student") {
      response = await fetch(`${baseURL}user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    // } else if (role == "admin") {
    //   response = await fetch(${baseURL}admin/adminSignIn, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    }

    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      ErrorToast(json.message);
      setError(json.message);
    }

    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsloading(false);

    //   setHasDisplayedTokenError(false);

    //   if (json.user.roles == "student") {
        navigate("/studentDashboard");
    //   } else {
    //     SuccessToast("Login successful");
    //     navigate("/admin-dashboard/home");
    //   }
    }
  };
  return { login, isLoading, error };
};

// import { useState } from "react";
// import { useAuthContext } from "./authContext";
// import { useNavigate } from "react-router-dom";


// export  const useLogin = () => {
//     const navigate = useNavigate();

//     const [error, setError] = useState(null)
//     // isloading is used on buton
//     const [isLoading, setIsloading] = useState(false)
//     const {dispatch} = useAuthContext()


//     const login = async (email, password) => {
//         setIsloading(true)
//         setError(null)

//         const response = await fetch('https://server-eight-beige.vercel.app/api/user/login', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({email, password})
//         })

//         const json = await response.json()

//         if (!response.ok) {
//             setIsloading(false)
//             setError(json.message)
//         }

//         if (response.ok) {
//             // save the user to local storage

//             localStorage.setItem('user', JSON.stringify(json)) || []

//         // update the auth context
//         dispatch({type: 'LOGIN', payload: json})
//         setIsloading(false)
//         navigate('/')
//         }
//     }
//     return{ login, isLoading, error}
// }

