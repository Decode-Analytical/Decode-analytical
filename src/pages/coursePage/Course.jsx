import React, { useState } from "react";
import {
  OverView,
  Video,
  CourseContent,
  Review,
  CreateComment,
} from "../../components/coursePage";
import Menu from "./Menu.png";
import Close from "./Close.png";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCourseDataQuery } from "../../redux/FetchApi/GetCourseData";
import { TailSpin } from "react-loader-spinner";

const Course = () => {
  let param = useParams();
  let { id } = param;
  const { isLoading, isError, data } = useGetCourseDataQuery(id);
  const [coursContactisOpen, setcoursContactisOpen] = useState(false);
  const [hasWatch, setHasWatch] = useState([]);
  const [trackVideo, setTrackVideo] = useState(0);
  console.log(data?.result[0])

  function markVideoAsWatched(mainIndex, videoId) {
    setHasWatch((prevHasWatch) => [...prevHasWatch, mainIndex]);
  }

  function courseUpdate(index) {
    setTrackVideo(index);
  }

  return (
    <section>
      {isLoading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <TailSpin height="80" width="80" color="yellow" ariaLabel="Loading" />
        </div>
      ) : isError ? (
        <div className="h-screen w-full flex justify-center items-center">
          <h2 className="text-xl text-red-400 font-bold">Please Signin Again</h2>
        </div>
      ) : (
        <div className="bg-white">
          <div className={`flex justify-between p-4`}>
            <h1 className="text-2xl font-bold">Course Content</h1>
            <button
              type="button"
              onClick={() => {
                setcoursContactisOpen(!coursContactisOpen)
              }}
            >
              <img src={!coursContactisOpen ? Close : Menu} alt="Toggle Menu" />
            </button>
          </div>
          <div className={`${!coursContactisOpen ? "flex" : "hidden"}`}>
            <CourseContent
              modules={data?.result[0].module}
              watchVideo={hasWatch}
              courseClick={courseUpdate}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Course;
