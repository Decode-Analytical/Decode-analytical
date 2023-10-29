import React, { useEffect, useState } from "react";
import "../authetication/auth.css";
import { FaAngleLeft, FaUser } from "react-icons/fa";
import AuthFooter from "./AuthFooter";
import { Link } from "react-router-dom";

export default function ResetPassword({match}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    useEffect(() => {

        const resetToken = match.params.token;
    }, [match.params.token]);
    
    try {
      const response = await fetch("https://decode-mnjh.onrender.com/api/user/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, token: match.params.token }),
      });

      if (response.status === 200) {
        setMessage("Password successfully reset.");
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center ">
      <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <FaAngleLeft />

            <Link to="/forgetpassword">
              <small className="ms-3 underline font-extrabold "> Go Back</small>
            </Link>
          </div>
        </div>
        <div className="center bg-[#000921] pe-10 p-3 w-8 rounded-md mb-10 ">
          <FaUser className="text-[#5333AD] text-3xl" />
        </div>
        <h2 className="text-center text-xl font-extrabold">Reset Password</h2>
        <p className="ms-3 my-5 text-xs text-center font-semibold">
          Reset your password
        </p>

        <div>
          <form onSubmit={handleSubmit}>
            <label className="font-bold text-sm">New Password</label>
            <input
              type="password"
              placeholder="Enter your password.."
              className="p-1 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             <label className="font-bold text-sm">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm your new password..."
              className="p-1 mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <input type="submit" value="Reset Password" />
          </form>
          <p className="text-red-600 text-sm">{message}</p>
          <p className="font-medium text-zinc-500">
            New here?{" "}
            <a href="/auth" className="ms-3 text-[#5333AD]">
              Sign Up
            </a>
          </p>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
}
