import React from "react";
import FirstCard from "./assets/card/FirstCard.png";
import Second from "./assets/card/SecondCard.png";
import ThirdCard from "./assets/card/ThirdCard.png";
import ForthCard from "./assets/card/ForthCard.png";
import AdminCard from "../../components/AdminDashboard/AdminCard";
import MainImage from "./assets/mainImage/MainImage.png";
import backGround from "./assets/mainImage/MainBackground.png";

const AdminDashboard = () => {
  let cardsData = [
    {
      id: 1,
      name: "Total student enrolled",
      number: 1002004,
      image: FirstCard,
    },
    { id: 2, name: "Daily courses visits", number: 5002, image: Second },
    { id: 3, name: "Total course created", number: 56, image: ThirdCard },
    { id: 4, name: "Reviews", number: 15169, image: ForthCard },
  ];
  return (
    <section className="bg-gray-100 w-full min-h-screen h-full flex flex-col items-center">
      <div className="md:w-11/12">
        <div
          className={`flex w-full justify-between items-center h-32 shadow-lg my-6 px-2 text-[#616161]`}
        >
          <h2 className="font-bold text-center text-4xl">My Dashboard</h2>
          <img src={MainImage} alt="Dashboard" />
        </div>
        <ul className="flex flex-wrap mt-6 justify-between">
          <AdminCard card={cardsData} />
        </ul>
      </div>
    </section>
  );
};

export default AdminDashboard;
