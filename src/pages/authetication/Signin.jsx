import React, { useState } from "react";
import "../authetication/auth.css";
import { FaUser } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

export default function Signin() {
  const navigate = useNavigate();

  const { login, error, isLoading } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleClose = () => {
    navigate("/auth");
  };

  return (
    <div className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center ">
        <div className="flex flex-wrap justify-end">
          <img
            src={close}
            alt="close"
            className="w-3 h-3"
            onClick={handleClose}
          />
        </div>

        <div className="center bg-[#000921] pe-10 p-3 w-8 rounded-md mb-10 ">
          <FaUser className="text-[#5333AD] text-3xl" />
        </div>
        <h2 className="text-center text-xl font-extrabold">Welcome Back</h2>
        <p className="ms-3 my-5 text-xs text-center font-semibold">
          Sign in your account
        </p>

        <div>
          <form>
            <label htmlFor="email" className="font-bold text-sm">
              Email Address
            </label>

            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email address.."
              className="p-1 mb-4"
            />

            <label htmlFor="password" className="font-bold text-sm">
              Password
            </label>
            <Link to="/forgetpassword">
              <label
                htmlFor=""
                className="font-bold text-xs mt-2 float-right text-[#040E53]"
              >
                Forget Password
              </label>
            </Link>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-1 mb-4"
              placeholder="Enter password.."
            />

            <input
              type="submit"
              value={isLoading ? "Waiting..." : "Log In"}
              onClick={handleSubmit}
              disabled={isLoading}
            />
            {isLoading && <Loader />}
            {error && (
              <div>
                <p className="text-[#ff0000] text-sm text-center">{error}</p>
              </div>
            )}
          </form>
          <p className="text-sm text-zinc-500">
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
