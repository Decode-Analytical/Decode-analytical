import React from "react";

const AdminCard = ({ card }) => {
  return (
    <>
      {card.map((data, index) => (
        <li key={index} className="flex p-9 m-1 shadow-md w-80">
          <div className="w-40 pr-3 text-center">
            <p className="text-gray-600">{data.name}</p>
            <h3 className="font-bold text-center text-xl">{data.number}</h3>
          </div>
          <img src={data.image} alt="On going courses" />
        </li>
      ))}
    </>
  );
};

export default AdminCard;
