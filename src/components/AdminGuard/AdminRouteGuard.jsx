import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminRouteGuard({ children, role }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (role?.user?.roles == "admin") {
      // You can navigate here
      navigate("/AdminDashboard");
    } else if (role?.user?.roles == "student") {
      // You can navigate here
      navigate("/");
    } else {
      // You can navigate here
      navigate("/noAuth");
    }
  }, [role]); // Add role as a dependency to re-run the effect when it changes

  return <>{children}</>;
}

export default AdminRouteGuard;
