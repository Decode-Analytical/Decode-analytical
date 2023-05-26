import logo from "./logo.png"



export default function navBar() {

    return (
      <div className="sticky top-0 z-10">
            <section className="bg-gray-200 ">
                <nav className="max-w-[1330px] m-auto ">
                    <div className=" flex justify-between text-blue-950  items-center mx-2 ">
                        <div className="">
                            <img src={logo} alt="Analytical logo" />
                        </div>

                        <div className="">
                                <p className=" font-bold text-blue-950">
                                Decode LMS
                            </p>
                        </div>

                        <div className="">
                            <button type="" className=" bg-blue-950 text-white py-1 px-4 border border-blue-950 hover:bg-white hover:text-blue-950">
                                Login
                            </button>
                        </div>
                    </div>
                </nav>
            </section>
      </div>
    )
}