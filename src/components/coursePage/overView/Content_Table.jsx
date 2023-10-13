import React, { useState } from "react";
import { MdExpandMore ,MdExpandLess } from "react-icons/md";

const Content_Table = (modules) => {
  const [dropDown, setDropDown] = useState(null);
  console.log(modules.modules);
  let array = modules.modules;
  // for(let minNUm of )
  let Lectures = 0;
  let Durations = 0;

  function ConverttoMin(time) {
    if (time == undefined) return;
    let modulesDuration = time;
    const hrIndex = modulesDuration.indexOf("hr");
    let mins = 0;
    const minIndex = modulesDuration.indexOf("min");
    let hours = 0;
    if (hrIndex !== -1) {
      hours = parseInt(modulesDuration.substring(0, hrIndex).trim());
    }
    if (minIndex !== -1) {
      mins = parseInt(
        modulesDuration
          .substring(hrIndex !== -1 ? hrIndex + 2 : 0, minIndex)
          .trim()
      );
    }
    let duration = hours * 60 + mins;
    return duration;
  }

  for (let i = 0; i < array.length; i++) {
    let module = array[i];
    let video = module.video.length;
    let modulesDuration = module.module_duration;
    let duration = ConverttoMin(modulesDuration);
    Lectures += video;
    Durations += duration;
  }

  // console.log(durations)

  const handleDropDown = (index) => {
    if (dropDown == index) {
      setDropDown(null)
    } else {
      setDropDown(index)
    }
  }
  return (
    <section>
      <div>
        <p className="flex gap-2">
          <span>{modules.modules.length} sections</span>
          <span> .{Lectures} Lectures</span>
          <span> .{Durations}min total length </span>
        </p>
      </div>
      <ul className="my-2 flex flex-col">
        {array.map((modu, index) => (
          <>
            <li
              key={index}
            >
              <div className="flex justify-between items-center px-3 py-4 border-2">
                <div className="flex gap-1 items-center">
                  <button type="button" onClick={() => handleDropDown(index)}>
                    
                    {dropDown !== null ? dropDown == index ? <MdExpandLess size={25} /> : <MdExpandMore size={25} /> : <MdExpandMore size={25} /> }
                  </button>
                  <h3>{modu.module_title}</h3>
                </div>
                <h4>
                  {modu.video.length} lectures.{" "}
                  {ConverttoMin(modu.module_duration)} min
                </h4>
              </div>
              {dropDown !== null && dropDown == index && (
                <ul className="flex flex-col">
                  {modu.video.map((videos, videoIndex) => (
                    <li key={videoIndex} className="border-2 px-3 md:px-16 py-5 text-sm">{videos.originalname}</li>
                  ))}
                </ul>
              )}
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default Content_Table;
