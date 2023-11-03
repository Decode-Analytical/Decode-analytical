import React from "react";
import { Navigate } from "react-router-dom";

function AdminRouteGuard({ children, isAdmin }) {
  if (isAdmin) {
    // User is an admin, allow access to the child components
    return children;
  } else {
    // User is not an admin, navigate to another route (e.g., "/noAuth")
    return <Navigate to="/noAuth" />;
  }
}

export default AdminRouteGuard;
