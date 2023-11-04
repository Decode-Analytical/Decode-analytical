import React from "react";
import FirstCard from "./assets/card/FirstCard.png";
import Second from "./assets/card/SecondCard.png";
import ThirdCard from "./assets/card/ThirdCard.png";
import ForthCard from "./assets/card/ForthCard.png";
import AdminCard from "../../components/AdminDashboard/AdminCard";
import MainImage from "./assets/mainImage/MainImage.png";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const  navigate  = useNavigate();
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
        // height: "1000",
        type: "area",
        // width: "1000px",
        animation: {
          enabled: true,
        },
      },
      fill: {
        type: "gradient",
        opacity: 0.8,
        gradient: {
          shadeIntensity: 0.8,
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
      responsive: [
        {
          breakpoint: 800,
          options: {
            chart: {
              width: 600,
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 350,
              height: 500,
            },
          },
        },
      ],
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

  let seriesLength = 9;
  var optimalColumnWidthPercent =
    20 + 60 / (1 + 30 * Math.exp(-seriesLength / 3));
  let BarChart = {
    series: [
      {
        name: "Enrollments",
        data: [
          "42%",
          "89%",
          "32%",
          "55%",
          "99%",
          "79%",
          "19%",
          "49%",
          "63%",
          "60%",
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "350",
        // width: "1000px",
        animation: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: optimalColumnWidthPercent + "%",
        },
      },
      fill: {
        colors: ["#E81515"],
        opacity: 1,
      },
      responsive: [
        {
          breakpoint: 800,
          options: {
            chart: {
              width: 600,
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 400,
              height: 500,
            },
          },
        },
      ],
      xaxis: {
        type: "Course",
        categories: [
          "UX Design",
          "Python",
          "Cybersecurity",
          "HTML",
          "Data Analytics",
          "Machine Learning",
          "Graph Design",
          "Digital Marketing",
          "Technical Support",
          "JavaScript",
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
        <ul className="flex flex-wrap mt-6 justify-between items-center">
          <AdminCard card={cardsData} />
        </ul>
        <div className="flex w-full md:justify-center my-9 flex-col items-center">
          <button
            type="Button"
            className="bg-blue-400 w-48 h-16 text-lg my-4 "
            onClick={() => navigate("/newcourse")}
          >
            Create a Course
          </button>
          <Chart
            options={Graphstate.options}
            series={Graphstate.series}
            // type="area"
            width="1000"
          />
        </div>
        <div className="flex w-full md:justify-center my-9">
          <Chart
            options={BarChart.options}
            series={BarChart.series}
            type="bar"
            width="1000"
          />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
