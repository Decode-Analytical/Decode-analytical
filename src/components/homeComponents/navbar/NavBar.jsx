import { useState } from "react";
import { Link } from "react-router-dom";
import AllPages from "../../../pages/AllPages";

export default function navBar() {
  const [openMenu, setOpenMenu] = useState(false)
  function Menu() {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <nav className={`bg-lightGrey text-blue-950 items-center flex justify-between sticky top-0 px-5 ${openMenu && "h-screen"}`}>

        <Link to="/login" className="place-self-end">
          <button className="bg-[#040E53] text-white md:py-4 md:px-14 px-10 py-3 border text-lg rounded-md">
            Login
          </button>
        </Link>

        {/* LINK TO ALL PAGES THAT WILL BE CLEARED....... THIS IS JUST FOR DEVELOPMENT PURPOSES */}

        {/* <Link to="/AllPages"> */}
          <button type="button" onClick={Menu} className="">
            TO ALL THE PAGES
          </button>
        {/* </Link> */}

        {openMenu && (
          <AllPages close={Menu} />
        )}
      </nav>
    </>
  );
}
