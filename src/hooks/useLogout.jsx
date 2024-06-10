import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./authContext";
import { toast } from "react-toastify";
import { setHasDisplayedTokenError } from "../utils/errorFlag";

export const useLogout = () => {
  const navigate = useNavigate();

  // dispatch logout action
  const { dispatch } = useAuthContext();

  const logout = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("user");
    }

    setHasDisplayedTokenError(false);

    dispatch({ type: "LOGOUT" });
    navigate("/AdminLogin");
    toast.success("Logout successful");
  };
  return { logout };
};
