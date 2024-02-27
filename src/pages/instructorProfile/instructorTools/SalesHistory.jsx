import React from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import Tab from "../../../utils/Tab";
import SalesTable from "./SalesTable";
import { Course, Session } from "../../../utils/Constants";
import { Heading } from "../../../utils/Heading";

const SalesHistory = () => {
  return (
    <ProfileLayout px={"4"}>
      <Heading title={"Sales History"} ml={"4"} />
      <Tab
        title1={"Original Course"}
        child1={<SalesTable data={Course} />}
        title2={"Live Session"}
        child2={<SalesTable data={Session} />}
      />
    </ProfileLayout>
  );
};

export default SalesHistory;
