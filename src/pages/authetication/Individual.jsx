import React, { useState } from "react";
import "../authetication/auth.css";
import { FaAngleLeft, FaGoogle, FaUser } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
import { useSignup } from "../../hooks/useSignup";
import googleIcon from "../../assets/auth images/google.png";
import "./Individual.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

// // const REGISTER_URL = "https://decode-mnjh.onrender.com/api/user/signup"
const REGISTER_URL = "https://server-eight-beige.vercel.app/api/user/signup";

export default function Individual() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [success, setsuccess] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsuccess(true);
    try {
      const response = await axios.post(REGISTER_URL, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });
      console.log("Signup successful:", response.data);
      // Handle success, such as redirecting or showing a success messa
      setsuccess(false);
      if (response) {
        navigate("/Courses");
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Handle error, such as displaying an error message
    }
    await signup(firstName, lastName, phoneNumber, email, password);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await signup(firstName, lastName, phoneNumber, email, password);
  // };

  return (
    <div className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center">
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center">
            <FaAngleLeft />
            <a href="/auth" className="ms-3 underline font-extrabold ">
              <small>Go Back</small>
            </a>
          </div>

          <img src={close} alt="close" className="w-3 h-3" />
        </div>
        <div className="center bg-[#000921] pe-10 p-3 w-8 rounded-md mb-10 ">
          <FaUser className="text-[#5333AD] text-3xl" />
        </div>
        <h2 className="text-center text-xl font-extrabold">
          Create your account
        </h2>
        <p className="text-center text-[#030B42] font-bold my-3">
          INDIVIDUAL ACCOUNT
        </p>
        <div className="flex justify-center items-center border border-zinc-200 p-1 my-3">
          <img src={googleIcon} alt="google-icon" width={20} />
          <p className="ms-3 text-[#010A09] text-sm">Sign Up Using Google</p>
        </div>

        <div className="flex flex-wrap items-center text-slate-400">
          <div className="w-[40%] border-t border-t-slate-400"></div>
          <p className="mx-3">or</p>
          <div className="w-[40%] border-t border-t-slate-400"></div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname" className="font-bold text-sm">
              First Name
            </label>
            <input
              className="p-1 mb-3"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label htmlFor="lName" className="font-bold text-sm">
              Last Name
            </label>
            <input
              className="p-1 mb-3"
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />

            <label htmlFor="phoneNumber" className="font-bold text-sm">
              Phone Number
            </label>
            <input
              className="p-1 mb-3"
              type="number"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />

            <label htmlFor="email" className="font-bold text-sm">
              Email Address
            </label>
            <input
              className="p-1 mb-3"
              name="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="password" className="font-bold text-sm">
              Password
            </label>
            <input
              className="p-1 mb-3"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="btn text-black text-base">Sign Up</button>
          </form>
          {error && <div className="text-xs text-red-500">{error}</div>}
          <p className="font-medium text-zinc-500">
            Already have an account?{" "}
            <a href="/login" className="ms-3 text-[#5333AD]">
              Log In
            </a>
          </p>
        </div>
        <div className={success ? "overlay" : "loading"}>
          {/* <h2>Loading...</h2> */}
          <TailSpin height="80" width="80" color="yellow" ariaLabel="Loading" />
        </div>

        <AuthFooter />
      </div>
    </div>
  );
}
