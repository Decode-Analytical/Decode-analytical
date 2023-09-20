import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/homeComponents/navbar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import LoginSignUp from "./pages/login/LoginSignUp";
import PasswordReset from "./components/loginComponents/PasswordReset";
import PremiumCourses from './pages/courseDetailPage/PremiumCourses'
import FreeCourses from './pages/courseDetailPage/FreeCourses'
import CartPage from "./pages/cartAndPaymentPage/CartPage";
import PaymentPage from "./pages/cartAndPaymentPage/PaymentPage";
import CoursePage from "./pages/coursePage/CoursePage";


function App() {
  return (
    <div className="App">
      <Router>
        
        <div className=" flex justify-between relative">
            <div className=" flex-1">
              <NavBar />
              <Routes>
                <Route path='/' exact element = {<HomePage/>} />
                <Route path='/LoginSignUp' element = {<LoginSignUp/>} />
                <Route path='/PasswordReset' element = {<PasswordReset />} />
                <Route path='/PremiumCourses' element = {<PremiumCourses />} />
                <Route path='/FreeCourses' element = {<FreeCourses />} />
                <Route path='/CartPage' element = {<CartPage />} />
                <Route path='/PaymentPage' element = {<PaymentPage />} />
                <Route path="/CousrsePage" element = {<CoursePage />} />
              </Routes>
            </div>
          </div>
    </Router>      
      </div>
        
  );
}

export default App;
