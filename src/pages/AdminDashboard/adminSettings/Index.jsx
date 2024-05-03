import React from "react";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import Tab from "../../../components/Tab";
import AccountSetting from "../../../components/adminSettings/AccountSetting";
import NotificationSettings from "../../../components/adminSettings/NotificationSettings";
import PaymentSettings from "../../../components/adminSettings/PaymentSettings";

const AdminSettings = () => {
  return (
    <ProfileLayout title={"Settings"}>
      <Tab
        title1={"Account settings"}
        child1={<AccountSetting />}
        title2={"Notification settings"}
        child2={<NotificationSettings />}
        title3={"Payment settings"}
        child3={<PaymentSettings />}
      />
    </ProfileLayout>
  );
};

export default AdminSettings;
