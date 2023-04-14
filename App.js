
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

// react router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');

const togglemode = ()=>{
  if(mode === 'light'
  ){
    document.body.style.backgroundColor = 'gray'
    setmode('dark')
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
  
  {/* <Navbar /> */}
  {/* <Router> */}

  <Navbar title="Textutils" mode={mode}  togglemode={togglemode}      about={'About'} /> 
  <div className="container my-3" >
  {/* <Switch> */}
          {/* <Route path="/About"> */}
            {/* <About /> */}
          {/* </Route> */}
         
          {/* <Route path="/"> */}
            <Textform heading="Text to Analyze" />
         
          {/* </Route> */}
  {/* </Switch> */}
  {/* <Textform heading="Text to Analyze" /> */}
  </div>
  {/* </Router> */}
  {/* <About/> */}
    </>
  );
}

export default App;
