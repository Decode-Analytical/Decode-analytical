import React, { useState, useEffect, useRef, useContext } from "react";
import "../authetication/auth.css";
import { FaUser } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import axios from "../../api/axios";
import { TailSpin } from "react-loader-spinner";

import { AuthContext } from "../../context/AuthContext";

// https://decode-mnjh.onrender.com/api

const LOGIN_URL = "https://server-eight-beige.vercel.app/api/user/login";
export default function Signin() {
  // const { setUser } = useContext(AuthContext);
  const { updateUser } = useContext(AuthContext);
  // const { updateUser } = useAuth()
  const navigate = useNavigate();

  // const {setAuth} = useAuth()
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log(email);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { "content-type": "application/JSON" },
          withCridentials: true,
        }
      );
      console.log(response.data);
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;
      const firstName = response?.data?.user?.firstName;
      const lastName = response?.data?.user?.lastName;
      const mail = response?.data?.user?.email;
      const password = response?.data?.user?.password;
      const id = response?.data?.user?._id;
      const picture = response?.data?.user?.picture;
      const user = {
        mail,
        firstName,
        lastName,
        password,
        accessToken,
        picture,
      };
      console.log(user, "Hello");
      updateUser(user);
      setEmail("");
      setPwd("");
      setSuccess(false);
      if (response) {
        navigate("/Dashboard");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing email or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  const { login, error, isLoading } = useLogin();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await login(email, password);
  // };

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
        <p className="ms-3 my-5  text-center font-semibold">
          Sign in your account
        </p>

        <div>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="font-bold ">
              Email Address
            </label>

            <input
              type="email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email address"
              className="p-1 mb-4"
            />

            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <Link to="/forgetpassword">
              <label
                htmlFor=""
                className="font-bold mt-2 float-right text-[#040E53]"
              >
                Forget Password
              </label>
            </Link>
            <input
              type="password"
              ref={userRef}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              className="p-1 mb-4"
              placeholder="Enter password"
            />

            {/* <input
              type="submit"
              value="Log In"
              onClick={handleSubmit}
              disabled={isLoading}
            /> */}
            <button className="btn text-base text-black">Log In</button>
            {/* {error && <div>
              <p className="text-[#ff0000] text-sm text-center">{error}</p>
              </div>} */}
          </form>
          <p className="font-medium text-zinc-500">
            New here?
            <a href="/auth" className="ms-3 text-[#5333AD]">
              Sign Up
            </a>
          </p>
        </div>
        <div className={success ? "overlay" : "loading"}>
          <TailSpin height="80" width="80" color="yellow" ariaLabel="Loading" />
        </div>

        <AuthFooter />
      </div>
    </div>
  );
}
