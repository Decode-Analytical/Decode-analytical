import React, { useState } from "react";
import "../authetication/auth.css";
import { FaAngleLeft, FaGoogle, FaUser, FaUserAlt } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
import googleIcon from "../../assets/auth images/google.png";
import { useSignup } from "../../hooks/useSignup";

export default function Nysc() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstName, lastName, phoneNumber, email, password);
  };

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
          Create Enter your account
        </h2>
        <p className="text-center text-[#030B42] font-bold my-3">
          NYSC / IT STUDENT
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
            <label htmlFor="" className="font-bold text-sm">
              First Name
            </label>
            <input
              className="p-1 mb-3"
              type="text"
              placeholder="Enter your name.."
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />

            <label htmlFor="" className="font-bold text-sm">
              Last Name
            </label>
            <input
              className="p-1 mb-3"
              type="text"
              placeholder="Enter your last name..."
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />

            <label htmlFor="" className="font-bold text-sm">
              Phone Number
            </label>
            <input
              className="p-1 mb-3"
              type="number"
              placeholder="Enter your phone number.."
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />

            <label htmlFor="" className="font-bold text-sm">
              Email Address
            </label>
            <input
              className="p-1 mb-3"
              name="email"
              placeholder="Enter your email address.."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="" className="font-bold text-sm">
              Password
            </label>
            <input
              className="p-1 mb-3"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

<<<<<<< HEAD
            <input type="submit" value={isLoading ? "Waiting..." : "Sign Up"} />
          </form>
          {isLoading && <Loader />}
          <p className="text-sm text-zinc-500">
=======
            <input type="submit" value="Sign Up" />
          </form>
          {error && <div className="text-xs text-red-500">{error}</div>}
          <p className="font-medium text-zinc-500">
>>>>>>> AdminHomePage
            Already have an account?{" "}
            <a href="/login" className="ms-3 text-[#5333AD]">
              Log In
            </a>
          </p>
        </div>
<<<<<<< HEAD
        {error && <div className="text-xs text-red-500">{error}</div>}
=======
       
>>>>>>> AdminHomePage
        <AuthFooter />
      </div>
    </div>
  );
}
