import React, { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <p>Course Information</p>
      <form>
        <label htmlFor="title" className="font-bold text-sm">
          Title
        </label>
        <input
          type="text"
          placeholder="e.g introduction to data analysis"
          onChange={(e) => setTitle(e.target.value)}
          className="p-1 mb-3 w-[100%]"
          value={title}
        />
        <div className="grid sm:grid-cols-2 gap-1 mb-3">
          <div>
            <label for="category" className="font-bold text-sm block">
              Category
            </label>
            <select className="w-[50%] inline-block">
              <option>Data Management</option>
              <option>Front-end</option>
              <option>Backend-end</option>
            </select>
          </div>
          <div>
            <label for="level" className="font-bold text-sm block">
              Level
            </label>
            <select className="w-[50%]">
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Advance</option>
            </select>
          </div>
        </div>
        <label for="level" className="font-bold text-sm">
          Description
        </label>
        <textarea
          cols={10}
          rows={5}
          placeholder="e.g introduction to data analysis"
          onChange={(e) => setTitle(e.target.value)}
          className="p-1 mb-3 border border-zinc-200 w-[100%]"
          value={title}
        />
         <label htmlFor="title" className="font-bold text-sm">
          Frequently asked questions
        </label>
        <input
          type="text"
          placeholder="e.g how much do you charge per call"
          className="p-1 mb-3 w-[100%]"
          value={title}
        />
         <input
          type="text"
          placeholder="e.g a call cost...."
          className="p-1 mb-3 w-[100%]"
          value={title}
        />
        <div className="flex flex-wrap justify-between text-xs">
          <button className="border border-zinc-400 p-2">Save as draft</button>
          <button className="bg-violet-600 rounded-md text-white p-2">
            Save & continue
          </button>
        </div>
      </form>
    </div>
  );
}
