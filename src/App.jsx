import React from 'react';
import './App.css'
import NavBar from './components/homeComponents/navbar/NavBar';
import HomePage from './pages/homepage/HomePage';

function App() {

  return (
    <div className="App">
      <>
        <NavBar/>

        <div className="">
          <HomePage/>
        </div>
      </>
    </div>
  )
}

export default App
