import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/homeComponents/navbar/NavBar";
import HomePage from "./pages/homepage/HomePage";
import LoginSignUp from "./pages/login/LoginSignUp";
import Profile from "./pages/studentProfile/Profile";
import TecHistory from "./pages/studentProfile/TecHistory";
import DeskTopNav from "./components/homeComponents/navbar/DeskTopNav";
import PasswordReset from "./components/loginComponents/PasswordReset";
import Dashboard from './components/overlay components/Dashboard';
import Account from './components/overlay components/Account';
import MobileCourses from './components/homeComponents/navbar/MobileCourses';
import Certificate from './components/overlay components/Certificate';

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        
        <div className=" flex justify-between relative">
              <DeskTopNav />
            <div className=" flex-1">
              <NavBar />
              <Routes>
                <Route path='/' exact element = {<HomePage/>} />
                <Route path='/LoginSignUp' element = {<LoginSignUp/>} />
                <Route path='/Profile' element = {<Profile/>} />
                <Route path='/TecHistory' element = {<TecHistory/>} />
                <Route path='/PasswordReset' element = {<PasswordReset />} />
                <Route path='/Dashboard' element = {<Dashboard/>} />
                <Route path='/Account' element = {<Account/>} />
                <Route path='/MobileCourses' element = {<MobileCourses />} /> 
                <Route path='/Certificate' element = {<Certificate />} /> 
              </Routes>
            </div>
=======
        <div className="">
          {/* <DeskTopNav /> */}

          <div className="px-4">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/LoginSignUp" element={<LoginSignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/TecHistory" element={<TecHistory />} />
            <Route path="/PasswordReset" element={<PasswordReset />} />
          </Routes>
>>>>>>> ed90b0ae147772d5d5a27006a2278f9ce8ab4339
        </div>
      </Router>
    </div>
  );
}

export default App;
