import React from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import StatsCard from "../../../components/instructorTools/StatsCard";
import {
  CourseCardData,
  PerformanceCardData,
  StatCardData,
} from "../../../utils/Constants";
import CourseCard from "../../../components/instructorTools/CourseCard";
import TopPerformances from "../../../components/instructorTools/TopPerformances";
import { Heading } from "../../../utils/Heading";

const SalesAndPerformance = () => {
  // const { user } = useContext(AuthContext);

  // const [loading, setLoading] = useState(true);
  // const [userP, setUserP] = useState({ name: "...", imgUrl: "" });

  // const fetchUserData = () => {
  //   fetch("https://server-eight-beige.vercel.app/api/user/viewProfile", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data data:", data);
  //       const name = `${data.user.firstName} ${data.user.lastName}`;
  //       setUserP({
  //         name: name,
  //         imgUrl:
  //           "https://cdn.vcgamers.com/news/wp-content/uploads/2022/01/paquito-ml-3.jpg",
  //       });
  //       fetchEnrolledCourses();
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <ProfileLayout>
        <Heading title={"Sales And Performance"} />
        <div className="flex flex-wrap items-center justify-between gap-6 w-full">
          {StatCardData.map(({ title, sub, count, earning, to }, index) => (
            <StatsCard
              key={index}
              title={title}
              sub={sub}
              count={count}
              earning={earning}
              to={to}
            />
          ))}
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-14">
          <CourseCard
            title={"Original Course Sales"}
            sub={"See analysis for courses"}
            to={"/InstrucructorProfile/tools/sales-performance/sales-history"}
            courseData={CourseCardData}
          />
          <CourseCard
            title={"Live Session Sales"}
            sub={"See analysis for live lessons"}
            to={"/InstrucructorProfile/tools/sales-performance/sales-history"}
            courseData={CourseCardData}
          />
        </div>
        <div>
          <TopPerformances data={PerformanceCardData} />
        </div>
      </ProfileLayout>
    </div>
  );
};

export default SalesAndPerformance;
