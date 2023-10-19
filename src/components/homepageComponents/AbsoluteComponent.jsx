import React from "react";

export default function AbsoluteComponent() {
  return (
    <div className="absoluteDiv bottom-0 text-purple-900 ">
      <div className="bg-slate-200 relative bottom-20 grid-cols-2 grid sm:grid-cols-4 gap-3 p-10 mx-[5%] text-center rounded-lg  text-purple-1000">
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-lg font-bold">12k</h2>
          <p className="text-xs">Total Enrolled</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-lg font-bold">20</h2>
          <p className="text-xs">Courses</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-lg font-bold">50</h2>
          <p className="text-xs">Instructors</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-lg font-bold">200k</h2>
          <p className="text-xs">Resources</p>
        </div>
      </div>
    </div>
  );
}
