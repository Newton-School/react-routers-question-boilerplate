import React from 'react'
import "../styles/Shapes.css";
import { Link, useLocation } from 'react-router-dom'

  
 export default function Shapes() {
    
    
  
    
    return (
      <div id='shapesdiv'>
        
          <h2>Shapes</h2>
          <ul className="navbar-shapes">
          <li>
            <Link to="/Shapes?shape=square&color=Blue">Blue Square</Link>
          </li>
          <li>
            <Link to="/Shapes?shape=square&color=Red">Red Square</Link>
          </li>
          <li>
            <Link to="/Shapes?shape=circle&color=Blue">Blue Circle</Link>
          </li>
          <li>
            <Link to="/Shapes?shape=circle&color=Red">Red Circle</Link>
          </li>
        </ul>
  
          
        
      </div>
    );
  }
  
  function Child({ shape,color }) {
    console.log(shape);
    console.log(color);
    if (shape === "circle"){
        return (
          <div id ="circle"class = "divcircle" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      }
      else if (shape === "square"){
        return (
          <div id ="square"class = "divsquare" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      } 
      else return(
        <div id = "empty"class="empty"></div>
      )
      
  }

// export default Shapes