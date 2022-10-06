import './App.js'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';



import {
  BrowserRouter as Router,
Switch,
  Route,

  Routes
} from "react-router-dom";


function App() {
  const[mode,setMode]= useState('light');


 const toggleMode=()=>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#212529'
   }

else{ 
  setMode('light')
  document.body.style.backgroundColor='white'
}
  }

  return (
    <>
 <Navbar title="Trail" mode={mode} toggleMode={toggleMode}/>
 <div className="container">
   <Router>
 <Switch>
          <Route path="/About">
            <About />
          </Route>
          
          <Route path="/">
             <TextForm mode={mode}/>
          </Route>
        </Switch>
        </Router>  

 </div>
 
    </>
  );
}

export default App;
