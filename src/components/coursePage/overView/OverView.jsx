import React from 'react';
import { TextSlice } from './TextSlice';
import Content_Table from './Content_Table';

const OverView = () => {
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
              <li>Language: <span>English</span></li>
            </ul>
            <ul className="flex flex-col gap-2 my-3">
              <li>Modules: <span>2</span></li>
              <li>Lectures: <span>4</span></li>
              <li>Video: <span>32 total mins</span></li>
            </ul>
        </div>
        <div className="border-b-2 py-4">
          <h2 className="font-bold text-2xl my-4 mx-5">Description</h2>
          <TextSlice 
            text="
            This course is perfect it if you’re a beginner with Figma and you’re looking to learn the basic principles and workflows by actually creating a design project at the same time.
            Unlock the world of captivating digital experiences with our comprehensive UI/UX Design course. In this dynamic and hands-on learning journey, you will delve deep into the art and science of crafting user-centric interfaces that seamlessly blend aesthetics and functionality. Whether you're a seasoned designer aiming to refine your skills or a newcomer eager to enter the world of design, this course will equip you with the tools, techniques, and mindset needed to excel in the rapidly evolving field of UI/UX design.
            
            Course Highlights:
            - Holistic Design Approach: Learn how to view design through the lens of your users, creating interfaces that are not just visually stunning but also intuitive and user-friendly.            
            - User-Centered Design: Gain a profound understanding of your target audience's needs, behaviors, and preferences, allowing you to design products that resonate with users on a profound level.

            - Wireframing and Prototyping: Master the art of translating ideas into tangible designs using wireframes and prototypes, enabling you to iterate and refine your concepts effectively.
            
            - Visual Aesthetics: Develop an eye for design by exploring color theory, typography, and layout principles to create visually appealing and harmonious interfaces.
            "
            className="mx-5"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold my-4 mx-5">Course content</h2>

          <div className="mx-5">
            <Content_Table />
            </div>
        </div>
    </section>
  )
}

export default OverView