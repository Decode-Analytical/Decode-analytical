import React from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import { Link } from "react-router-dom";
import sales from "../../../assets/adminDashboardImages/sales.svg";
import community from "../../../assets/adminDashboardImages/community.svg";
import insight from "../../../assets/adminDashboardImages/insight.svg";
import support from "../../../assets/adminDashboardImages/support.svg";

const ToolCard = ({ icon, title, text, to }) => {
  return (
    <Link to={to}>
      <div className="bg-shadow flex flex-col h-full justify-center px-5 py-10 max-w-[400px] rounded-lg min-h-[335px]">
        <div className="flex justify-center">
          <img className="w-12" src={icon} alt={title} />
        </div>
        <h2 className="font-bold text-center text-[20px]">{title}</h2>
        <p className="text-center px-5 md:px-10">{text}</p>
      </div>
    </Link>
  );
};

const AdminTools = () => {
  return (
    <ProfileLayout title={"Tools"}>
      {/* <div className="grid place-items-center w-full"> */}
      <div className="flex flex-col gap-8 justify-center">
        {/* {ToolCardData.map(({ icon, title, text, to }, index) => ( */}
        <div className="flex flex-1 items-center flex-col md:flex-row gap-8 mx-auto">
          <ToolCard
            icon={sales}
            title={"Sales and Performance"}
            text={
              "Get insights into how your courses are performing in the sales market to keep track of their progress"
            }
            to={"/admin-dashboard/tools/sales-performance"}
          />
          <ToolCard
            icon={community}
            title={"Instructors Community"}
            text={
              "Connect with skilled instructors, ask questions, explore discussions, and more"
            }
            to={"/admin-dashboard/tools/instructors-community"}
          />
        </div>
        <div className="flex items-center flex-1 flex-col md:flex-row gap-8 mx-auto">
          <ToolCard
            icon={insight}
            title={"Marketplace Insights"}
            text={
              "Check if your course topic is in demand using our marketplace."
            }
            to={"/admin-dashboard/tools/marketplace-insights"}
          />
          <ToolCard
            icon={support}
            title={"Help and Support"}
            text={
              "You are welcome to take a look at our help center or reach out to our support team if you need any assistance."
            }
            to={"/admin-dashboard/tools/help-support"}
          />
        </div>
        {/* ))} */}
      </div>
      {/* </div> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-[90px] gap-x-[60px] place-items-center">
        {ToolCardData.map(({ icon, title, text, to }, index) => (
          <ToolCard key={index} icon={icon} title={title} text={text} to={to} />
        ))}
      </div> */}
    </ProfileLayout>
  );
};

export default AdminTools;
