import { useState } from "react";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  // isloading is used on buton
  const [isLoading, setIsloading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password, role) => {
    setIsloading(true);
    setError(null);
    let response;

    if (role == "student") {
      response = await fetch(
        "https://decode-mnjh.onrender.com/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
    } else if(role == "admin") {
        response = await fetch(
            "https://decode-mnjh.onrender.com/api/admin/adminSignIn",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );
    }

    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      setError(json.message);
    }
    console.log(json.user.roles);

    if (response.ok) {
      // save the user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsloading(false);
      if (json.user.roles == "student") {
        navigate("/");
      } else {
        navigate("/AdminDashboard");
      }
    }
  };
  return { login, isLoading, error };
};
