import React, { useState } from "react";
import "../authetication/auth.css";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import close from "../../assets/auth images/Vector.png";
import AuthFooter from "./AuthFooter";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [choice, setChoice] = useState("individual");
  const [div1Active, setDiv1Active] = useState(false);
  const [div2Active, setDiv2Active] = useState(false);

  const handleDiv1Click = () => {
    setDiv1Active(true);
    setDiv2Active(false);
  };

  const handleDiv2Click = () => {
    setChoice("nysc");
    setDiv1Active(false);
    setDiv2Active(true);
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (choice == "nysc") {
      navigate("/nysc");
    } else navigate("/individual");
  };
  return (
    <div className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center ">
        <div className="flex flex-wrap justify-end">
          <img
            src={close}
            alt="close"
            className="w-3 h-3 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="center bg-[#000921] pe-10 p-3 w-8 rounded-md mb-10 ">
          <FaUser className="text-[#5333AD] text-3xl" />
        </div>
        <h2 className="text-center text-xl font-extrabold">
          Create your account
        </h2>
        <p className="ms-3 my-3 text-sm text-center">
          HOW DO YOU WANT TO SIGN UP?
        </p>
        <div>
          <div
            className="flex flex-wrap border rounded-xl  border-zinc-200 items-start justify-center p-3 my-5"
            onClick={handleDiv1Click}
            style={{
              backgroundColor: div1Active ? "#fae283" : "white",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <div className=" p-2 rounded-md bg-[#E6E7EE] me-3 mt-3">
              <FaUser className="text-[#595959] text-lg" />
            </div>
            <div className="w-[80%]">
              <h2 className="text-base font-extrabold">Individual</h2>

              <p className="text-sm ">
                Select this is you are a new user and you have valid email
                address
              </p>
            </div>
          </div>
          <div
            className="flex flex-wrap border rounded-xl border-zinc-200 items-start justify-center p-3 my-5"
            onClick={handleDiv2Click}
            style={{
              backgroundColor: div2Active ? "#fae283" : "white",
              cursor: "pointer",
            }}
          >
            <div className=" p-2 rounded-md bg-[#E6E7EE] me-3 mt-5">
              <FaGraduationCap className="text-[#595959] text-xl" />
            </div>
            <div className="w-[80%]">
              <h2 className="text-base font-extrabold">IT Students / NYSC</h2>
              <p className="text-sm ">
                Select this if you are a student and you have valid
                matriculation number
              </p>
            </div>
          </div>
          <form>
            <input type="submit" value="Proceed" onClick={handleSubmit} />
          </form>
          <p className="font-medium mt-3 text-zinc-500">
            Already have an account?
            <a href="/login" className="ms-3 text-[#5333AD]">
              Log in
            </a>
          </p>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
}
