import React from "react";

export default function AbsoluteComponent() {
  return (
    <div className="md:absolute   right-1/4 text-purple-900">
      <div className="bg-slate-200 grid sm:grid-cols-4 gap-3 p-10 mx-[5%] text-center rounded-lg  text-purple-1000">
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-xl font-bold">12k</h2>
          <p className="text-sm">Total Enrolled</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-xl font-bold">20</h2>
          <p className="text-sm">Courses</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-xl font-bold">50</h2>
          <p className="text-sm">Instructors</p>
        </div>
        <div className="bg-white p-6 rounded-md">
          <h2 className="text-xl font-bold">200k</h2>
          <p className="text-sm">Resources</p>
        </div>
      </div>
    </div>
  );
}
