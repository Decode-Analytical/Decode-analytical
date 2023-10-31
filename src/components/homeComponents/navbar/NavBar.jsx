import { Link } from "react-router-dom";

export default function navBar() {

  return (
    <>
      <nav className=" bg-lightGrey text-blue-950 items-center flex justify-between sticky top-0 px-5">

        <Link to="/login" className="place-self-end">
          <button className="bg-[#040E53] text-white md:py-4 md:px-14 px-10 py-3 border text-lg rounded-md">
            Login
          </button>
        </Link>

        {/* LINK TO ALL PAGES THAT WILL BE CLEARED....... THIS IS JUST FOR DEVELOPMENT PURPOSES */}

        <Link to="/AllPages">
          <p className="">
            TO ALL THE PAGES
          </p>
        </Link>
      </nav>
    </>
  );
}
