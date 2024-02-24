import React from "react";
import Layout from "../../../components/Layout";
import Tab from "../../../utils/Tab";
import SalesTable from "./SalesTable";
import { Course, Session } from "../../../utils/Constants";

const SalesHistory = () => {
  return (
    <Layout px={"4"}>
      <h2 className="font-bold text-2xl mb-12 ml-4">Sales History</h2>
      <Tab
        title1={"Original Course"}
        child1={<SalesTable data={Course} />}
        title2={"Live Session"}
        child2={<SalesTable data={Session} />}
      />
    </Layout>
  );
};

export default SalesHistory;
