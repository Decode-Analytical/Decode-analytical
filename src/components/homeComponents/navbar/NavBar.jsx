import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [userLogin, setUser] = useState(false); // Define the user state variable

  useEffect(() => {
    // Get the user data from localStorage when the component mounts
    const userData = JSON.parse(localStorage.getItem("user")) || null;
    setUser(userData); // Set the user state with the retrieved data
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
  }

  return (
    <>
      <nav className="bg-lightGrey text-blue-950 items-center flex justify-between sticky top-0 px-5">
        <Link to="/login" className="place-self-end">
          {userLogin == false || userLogin == null ? (
            <button className="bg-[#040E53] text-white md:py-4 md:px-14 px-10 py-3 border text-lg rounded-md">
              Login
            </button>
          ) : (
            <button className="bg-[#040E53] text-white md:py-4 md:px-14 px-10 py-3 border text-lg rounded-md" onClick={logOut}>
              LogOut
            </button>
          )}
        </Link>

        {/* LINK TO ALL PAGES THAT WILL BE CLEARED....... THIS IS JUST FOR DEVELOPMENT PURPOSES */}
        <Link to="/AllPages">
          <p className="">TO ALL THE PAGES</p>
        </Link>
      </nav>
    </>
  );
}
