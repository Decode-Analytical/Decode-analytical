import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { UserProfileProvider } from "./context/UserProfileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        {/* <UserProfileProvider> */}
        <ToastContainer />
        <App />
        {/* </UserProfileProvider> */}
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
