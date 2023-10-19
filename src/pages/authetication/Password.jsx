import React, { useState } from "react";
import "../authetication/auth.css";
import { FaAngleLeft, FaUser } from "react-icons/fa";
import AuthFooter from "./AuthFooter";
import { Link} from "react-router-dom";

export default function Password() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null)
  
    const [isLoading, setIsloading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://decode-mnjh.onrender.com/api/user/forgetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const json = await response.json()

      if (!response.ok) {
          setIsloading(false)
          setError(json.error)
      }

      else if (response.ok) {
        setMessage(json.message);
      } 
    } catch (error) {
      setError(json.error);
    }
  };
console.log(error);
console.log(message);
console.log(isLoading);
  return (
    <div className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center ">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <FaAngleLeft />

            <Link to="/auth">
              <small className="ms-3 underline font-extrabold "> Go Back</small>
            </Link>
          </div>
        </div>
        <div className="center bg-[#000921] pe-10 p-3 w-8 rounded-md mb-10 ">
          <FaUser className="text-[#5333AD] text-3xl" />
        </div>
        <h2 className="text-center text-xl font-extrabold">Forgot Password</h2>
        <p className="ms-3 my-5 text-xs text-center font-semibold">
          Enter the email address associated with your account
        </p>

        <div>
          <form onSubmit={handleSubmit}>
            <label className="font-bold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address.."
              className="p-1 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input type="submit" value="Send" />
          </form>
          {error && (
          <p className="text-red-600 text-sm">{error}</p>
          )}
          {message && (
          <p className="text-green-600 text-sm">{message}</p>
          )}
          <p className="font-medium text-zinc-500">
            New here?{" "}
            <a href="/signup" className="ms-3 text-[#5333AD]">
              Sign Up
            </a>
          </p>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
}
