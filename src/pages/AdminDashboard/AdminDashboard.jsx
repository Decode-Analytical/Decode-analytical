import React, { useState } from "react";
import FirstCard from "./assets/card/FirstCard.png";
import Second from "./assets/card/SecondCard.png";
import ThirdCard from "./assets/card/ThirdCard.png";
import ForthCard from "./assets/card/ForthCard.png";
import AdminCard from "../../components/AdminDashboard/AdminCard";
import MainImage from "./assets/mainImage/MainImage.png";
import Chart from "react-apexcharts";
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
  let Graphstate = {
    series: [
      {
        name: "Enrollments",
        data: [30, 70, 50, 97, 70, 80, 30, 40, 50, 70, 80, 100, 30],
      },
      {
        name: "Visitors",
        data: [15, 40, 30, 61, 10, 100, 18, 42, 20, 43, 90, 13, 35],
      },
    ],
    options: {
      // colors: ["#3F8A9A", "#FF007A"],
      chart: {
        height: 350,
        type: "area",
        animation: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100],
        },
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: true,
        position: "top",
      },
      title: {
        text: "Course Engagement",
        align: "left",
        style: {
          fontSize: "24px",
          fontWeigth: "bold",
          color: "#2F2F2F",
        },
      },
      xaxis: {
        type: "Month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  };
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
        <div className="flex w-full justify-center my-9">
          <Chart
            options={Graphstate.options}
            series={Graphstate.series}
            type="area"
            width="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
