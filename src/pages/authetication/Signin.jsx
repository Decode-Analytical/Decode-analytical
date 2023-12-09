import React, { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import "../authetication/auth.css";
import { FaUser } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
// import { useLogin } from "../../hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css"
import axios from "../../api/axios";
import { TailSpin } from 'react-loader-spinner'


// import Dashboard from "../dashboard/Dashboard";

// https://decode-mnjh.onrender.com/api
const LOGIN_URL = "https://server-eight-beige.vercel.app/api/user/login"

export default function Signin() {
  const navigate = useNavigate();

  const {setAuth} = useContext(UserContext)
  const userRef = useRef()
  const errRef = useRef()
 const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true)
    
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email: user, password: pwd}),
        {
          headers: {"content-type": "application/JSON"},
          withCridentials: true
        }
      );
     
      const accessToken = response?.data?.token
      const roles = response?.data?.roles
      setAuth({user, pwd, roles, accessToken})
      setUser("")
      setPwd("")
      setSuccess(false)
      if(response) {
        navigate("/Dashboard")
      }

    } catch (err) {
      if(!err?.response) {
        setErrMsg("No server response")
      } else if(err.response?.status === 400) {
        setErrMsg("Missing email or password")
      } else if(err.response?.status === 401) {
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login failed")
      }
      errRef.current.focus()

    }
    
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
          <p ref={errRef} className={errMsg? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h2 className="text-center font-extrabold welcome">Welcome Back</h2>
          <p className="ms-3 my-5 text-sm text-center font-semibold">
            Sign in your account
          </p>
          

          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="font-bold">Email Address</label>

              <input
                type="email"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                placeholder="Enter your email address.."
                className="p-1 mb-4 logIn-input"
              />

              <label htmlFor="password" className="font-bold">Password</label>
              <Link to="/forgetpassword">
                <label htmlFor="password" className="font-bold mt-2 float-right text-[#040E53]">
                  Forget Password
                </label>
              </Link>
              
            
              <input
                type="password"
                id="password"
                
                
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className="p-1 mb-4 logIn-input"
                placeholder="Enter password.."
              />
            

              {/* <input
                type="submit"
                value="Log In"
                onClick={handleSubmit}
                disabled={isLoading}
              /> */}

              <button className="btn">Log In</button>
              
              {/* {error && <div>
                <p className="text-[#ff0000] text-sm text-center">{error}</p>
                </div>} */}
            </form>
            <p className="font-medium text-zinc-500">
              New here?{" "}
              <a href="/auth" className="ms-3 text-[#5333AD] ">
                Sign Up
              </a>
            </p>
          </div>
          
        
          <AuthFooter />
          <div className={success? "overlay" : "loading"}>
           {/* <h2>Loading...</h2> */}
           <TailSpin height="80" width="80" color="yellow" ariaLabel="Loading" />
          </div>
          
        </div>

      </div>
    
    );
}
