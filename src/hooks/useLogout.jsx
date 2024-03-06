import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./authContext";
import { toast } from "react-toastify";

export const useLogout = () => {
  const navigate = useNavigate();

  // dispatch logout action
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    navigate("/AdminLogin");
    toast.success("Logout successful");
  };
  return { logout };
};
