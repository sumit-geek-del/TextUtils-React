import "./App.css";
import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
  
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
      setalert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
        
      }, 1000);

  }

  const toggle =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
  }
  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" mode={Mode} toggleMode = {toggle} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About mode={Mode} />
          </Route>
          
          <Route exact path="/"> */}
          <TextForm showAlert ={showAlert}heading="Try TextUtils- Word Counter, Charaacter Counter, Remove ExtraSpaces " mode={Mode}/>
            
          {/* </Route>
        </Switch> */}
        
      </div>
    {/* </Router>
       */}
      
    </>
  );
}

export default App;
