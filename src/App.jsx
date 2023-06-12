import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/homeComponents/navbar/NavBar';
import HomePage from './pages/homepage/HomePage';
import LoginSignUp from './pages/login/LoginSignUp';
import Profile from './pages/studentProfile/Profile';
import TecHistory from './pages/studentProfile/TecHistory';
import DeskTopNav from "./components/homeComponents/navbar/DeskTopNav"
import PasswordReset from './components/loginComponents/PasswordReset';

function App() {

  return (
    <div className="App">
      <Router>
        
        <div className="grid grid-cols-[auto_1fr]">
          <DeskTopNav />

          <div>
            <NavBar />
            <Routes>
              <Route path='/' exact element = {<HomePage/>} />
              <Route path='/LoginSignUp' element = {<LoginSignUp/>} />
              <Route path='/Profile' element = {<Profile/>} />
              <Route path='/TecHistory' element = {<TecHistory/>} />
              <Route path='/PasswordReset' element = {<PasswordReset />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
