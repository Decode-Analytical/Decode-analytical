import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/homeComponents/navbar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import LoginSignUp from "./pages/login/LoginSignUp";
import PasswordReset from "./components/loginComponents/PasswordReset";
import PremiumCourses from './pages/courseDetailPage/premiumCourses'
import FreeCourses from './pages/courseDetailPage/freeCourses'
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        
        <div className=" flex justify-between relative">
            <div className="flex-1">
              <NavBar />
              <Routes>
                <Route path='/' exact element = {<HomePage/>} />
                <Route path='/LoginSignUp' element = {<LoginSignUp/>} />
                <Route path='/PasswordReset' element = {<PasswordReset />} />
                <Route path='/PremiumCourses' element = {<PremiumCourses />} />
                <Route path='/FreeCourses' element = {<FreeCourses />} />
                <Route path='/dashboard' element = {<Dashboard />} />
                <Route path='/profile/*' element = {<Profile />} />
              </Routes>
            </div>
          </div>
    </Router>      
      </div>
        
  );
}

export default App;
