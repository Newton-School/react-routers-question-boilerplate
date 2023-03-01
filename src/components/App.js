import React from "react";
import "../styles/App.css";
// import React from "react";
// import "./App.css"
import { BrowserRouter as Router,Link, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";
import Specificshape from "./Specificshape";



export default function App() {
  return (
    <div id="home">    
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          {/* Do not touch anything till here */}
          <li>
            {/* home */}
          </li>
          <li>
            {/* Shapes */}
          </li>
          <li>
            {/* Image */}
          </li>
        </ul>
      </nav>
      
      {/* <Routes> */}
        
      {/* </Routes> */}
    </div>
  );
}
// export default App;
