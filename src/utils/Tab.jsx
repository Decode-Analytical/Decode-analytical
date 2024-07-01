// TabComponent.js
import React, { useState } from "react";

const Tab = ({ title1, title2, child1, child2 }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full mx-auto mt-8 p-4">
      <div className="flex space-x-4 border-b-2">
        <div
          className={`cursor-pointer p-2 font-medium ${
            activeTab === 1
              ? "text-blue1 border-b-2 border-blue1 -mb-1"
              : "text-gray6"
          }`}
          onClick={() => handleTabClick(1)}
        >
          {title1}
        </div>
        <div
          className={`cursor-pointer p-2 font-medium ${
            activeTab === 2
              ? "text-blue1 border-b-2 border-blue1 -mb-1"
              : "text-gray6"
          }`}
          onClick={() => handleTabClick(2)}
        >
          {title2}
        </div>
      </div>

      <div className="mt-4">
        {activeTab === 1 && <div>{child1}</div>}

        {activeTab === 2 && <div>{child2}</div>}
      </div>
    </div>
  );
};

export default Tab;
