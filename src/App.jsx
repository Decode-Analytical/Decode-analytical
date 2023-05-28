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

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>

        <div className="">
          <Routes>
            <Route path='/' exact element = {<HomePage/>} />
            <Route path='/LoginSignUp' element = {<LoginSignUp/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
