// TabComponent.js
import React, { useState } from "react";

const WalletTab = ({ title1, title2, child1, child2 }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const Option = ({ title, tabNumber }) => (
    <div
      className={`cursor-pointer py-2 px-4 font-medium ${
        activeTab === tabNumber
          ? "bg-blue1 text-white1 rounded-lg"
          : "text-gray6"
      }`}
      onClick={() => handleTabClick(tabNumber)}
    >
      {title}
    </div>
  );

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex-col md:flex-row flex mx-auto justify-between items-center">
        <h2 className="font-bold text-2xl mb-4 md:mb-0">Statistics</h2>
        <div className="flex space-x-4 border-b-2 py-2 px-3 rounded-xl bg-shadow">
          <Option title={title1} tabNumber={1} />
          <Option title={title2} tabNumber={2} />
        </div>
      </div>

      <div className="h-[600px] mt-10 bg-shadow rounded-md px-[10px] pt-10 pb-6">
        {activeTab === 1 && <div>{child1}</div>}

        {activeTab === 2 && <div>{child2}</div>}
      </div>
    </div>
  );
};

export default WalletTab;
