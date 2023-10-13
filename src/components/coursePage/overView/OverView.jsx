import React from 'react';
import { TextSlice } from './TextSlice';
import Content_Table from './Content_Table';

const OverView = ({des, lengthmodules, language, modules}) => {
  return (
    <section className="md:ml-5 bg-white">
        <div className="my-4 py-5 border-b-2">
          <div className="mx-5">
            <h2 className="font-bold text-2xl my-4">About this course</h2>
            <p className="text-base">
              Learn the Figma's Essentials for UI/UX Design from a Sr. Designer with 8+ Years of Experience
            </p>

          </div>
        </div>

        <div className="flex gap-6 my-5 py-4 border-b-2">
            <ul className="my-3 mx-3 flex flex-col gap-2 ">
              <li>Skill Level: <span>Beginner Level</span></li>
              <li>Student: <span>29662</span></li>
              <li>Language: <span>{language || "English"}</span></li>
            </ul>
            <ul className="flex flex-col gap-2 my-3">
              <li>Modules: <span>{lengthmodules || "4"}</span></li>
              <li>Lectures: <span>4</span></li>
              <li>Video: <span>32 total mins</span></li>
            </ul>
        </div>
        <div className="border-b-2 py-4">
          <h2 className="font-bold text-2xl my-4 mx-5">Description</h2>
          <TextSlice 
            text={des}
            className="mx-5"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold my-4 mx-5">Course content</h2>

          <div className="mx-5">
            <Content_Table
              modules={modules}
            />
            </div>
        </div>
    </section>
  )
}

export default OverView