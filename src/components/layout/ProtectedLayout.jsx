import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedLayout = (WrappedComponent) => {
  const WrappedLayout = (props) => {
    const isAuthenticated =
      typeof window !== "undefined" &&
      JSON.parse(window.localStorage.getItem("user") || "{}")?.token;

    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/AdminLogin");
      }
    }, [pathname, navigate, isAuthenticated]);

    if (!isAuthenticated) {
      // If not authenticated, do not render the wrapped component
      return null;
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  // Set display name for the component
  WrappedLayout.displayName = `ProtectedLayout(${getDisplayName(
    WrappedComponent
  )})`;

  return WrappedLayout;
};

// Helper function to get display name of component
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default ProtectedLayout;
