import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useLogout } from "../../../hooks/useLogout";

// const handleLogout = (e) => {
//
// };

export default function NavBar() {
  const [userLogin, setUser] = useState(false); // Define the user state variable
  const { logout } = useLogout();

  useEffect(() => {
    function userData() {
      JSON.parse(localStorage.getItem("user")) || null;
      setUser(true)
    }
    userData()
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    console.log("Delete")
    setUser(false)
    logout();
  };

  return (
    <>
      <nav className="bg-lightGrey text-blue-950 items-center flex justify-between sticky top-0 px-5">
        <Link to="/login" className="place-self-end">
          {userLogin == true ? (
            <button
              className="py-3 text-lg rounded-md"
              onClick={(e) => logOut(e)}
            >
              <BiLogOut size={26} />
            </button>
          ) : (
            <button className="py-3 text-lg rounded-md">
              <BiLogIn size={26} />
            </button>
          )}
        </Link>

        {/* LINK TO ALL PAGES THAT WILL BE CLEARED....... THIS IS JUST FOR DEVELOPMENT PURPOSES */}
        <Link to="/AllPages">
          <p className="">
            <AiOutlineMenu size={35} />
          </p>
        </Link>
      </nav>
    </>
  );
}
