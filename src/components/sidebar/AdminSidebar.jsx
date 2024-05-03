import React from "react";
// import { sideBarItems } from "../../utils/constants";
import Sidebar from "./Sidebar";
import { sideBarItems } from "../../utils/Constants";

const AdminSidebar = ({ toggleOpenMenu, toggleCloseMenu, menuOpen }) => {
  return (
    <Sidebar
      toggleOpenMenu={toggleOpenMenu}
      toggleCloseMenu={toggleCloseMenu}
      menuOpen={menuOpen}
      role={"instructor"}
      btnLinks={sideBarItems}
    />
  );
};

export default AdminSidebar;
