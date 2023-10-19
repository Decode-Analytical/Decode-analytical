import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/homeComponents/navbar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import LoginSignUp from "./pages/login/LoginSignUp";
import PasswordReset from "./components/loginComponents/PasswordReset";
import PremiumCourses from "./pages/courseDetailPage/premiumCourses";
import FreeCourses from "./pages/courseDetailPage/freeCourses";
import CartPage from "./pages/cartAndPaymentPage/CartPage";
import PaymentPage from "./pages/cartAndPaymentPage/PaymentPage";
import Signin from "./pages/authetication/Signin";
import Password from "./pages/authetication/Password";
import Auth from "./pages/authetication/Auth";
import Individual from "./pages/authetication/Individual";
import InstructorProfile from "./pages/homepage/InstructorProfile";
import CourseInfo from "./pages/courseUpload/CourseInfo";
import ResetPassword from "./pages/authetication/ResetPassword";
import Nysc from "./pages/authetication/Nysc";

function App() {
  return (
    <div className="App">
      <Router>
        <div className=" flex justify-between relative">
          <div className=" flex-1">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/LoginSignUp" element={<LoginSignUp />} />
              <Route path="/PasswordReset" element={<PasswordReset />} />
              <Route path="/PremiumCourses" element={<PremiumCourses />} />
              <Route path="/FreeCourses" element={<FreeCourses />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/PaymentPage" element={<PaymentPage />} />
              <Route path="/nysc" element={<Nysc />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/forgetpassword" element={<Password />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/individual" element={<Individual />} />
              <Route path="/tutor/:id" element={<InstructorProfile />} />
              <Route path="/courseinfo" element={<CourseInfo />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
