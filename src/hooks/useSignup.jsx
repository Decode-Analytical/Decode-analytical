import { useState } from "react";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  // isloading is used on button
  const [isLoading, setIsloading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName,phoneNumber, email, password ) => {
    setIsloading(true);
    setError(null);

    const response = await fetch("https://server-eight-beige.vercel.app/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstName, lastName, phoneNumber, email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsloading(false);
      setError(json.error);
    }

    if (response.ok) {

      // save the user to local storage

      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsloading(false);
      navigate("/login");
    }
  };
  return { signup, isLoading, error };
};