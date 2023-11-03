// ProgressBar.js
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Progress() {
  const location = useLocation();
  const isCourseUploadRoute = location.pathname === "/newcourse";
  const isModuleUploadRoute = location.pathname.startsWith("/newmodule/");

  return (
    <section className="text-black font-bold text-sm bg-zinc-200 px-5 py-2 shadow-md my-5 mt-8 pb-4">
      <main className="grid sm:grid-cols-2">
        <div className="w-full h-12 flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center">
            <p
              className={`flex items-center rounded-full px-2 text-white ${
                isCourseUploadRoute ? "bg-[#040E53]" : "bg-[#040E53]"
              }`}
            >
              1
            </p>
            <p className="mx-3">Course Upload</p>
            <FaAngleRight className="text-base text-gray-400" />
          </div>

          <div className="flex flex-wrap items-center text-black">
            <p
              className={`flex items-center rounded-full px-2 ${
                isModuleUploadRoute ? "bg-[#040E53] text-white" : "bg-transparent border border-black"
              }`}
            >
              2
            </p>
            <p className="mx-3">Module Upload</p>
            <FaAngleRight className="text-base text-gray-400" />
          </div>
        </div>
      </main>
      <hr style={{ color: "grey" }} />
    </section>
  );
}

export default Progress;
