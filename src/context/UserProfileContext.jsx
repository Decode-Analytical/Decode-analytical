import React, { createContext, useEffect } from "react";
import { useFetchAdminProfile } from "../hooks/useFetchAdmin";

const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  const { fetchData: fetchAdminProfile, data: adminProfile } =
    useFetchAdminProfile();

  useEffect(() => {
    fetchAdminProfile();
  }, []);
  const userProfile = adminProfile?.user;

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider, UserProfileContext };
