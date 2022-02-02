import "./Topper.css";
import React from 'react';
import Intro from '../Intro/Intro.jsx'
import Contact from '../Contact/Contact.jsx'
import Works from '../Works/Works.jsx'
// import { Link } from 'react-router-dom';
import { BrowserRouter as   
  Router, Route,
  Link, Switch } from 'react-router-dom';


export default function Topper() {
  return (
    <Router>
        <div className='topper'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Icon</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <Link to="/">Home</Link> 
            {/* <a className="nav-link active" href="#">Home
              <span className="visually-hidden">(current)</span>
            </a> */}
          </li>
          <li className="nav-item">
                  {/* <a className="nav-link" href="#">Features</a> */}
                  <Link to="/Intro">Intro </Link>
          </li>
          <li className="nav-item">
                  {/* <a className="nav-link" href="#">Pricing</a> */}
                  <Link to="/Works">Projects </Link>
          </li>
          <li className="nav-item ">
                  {/* <a className="nav-link" href="#">About</a> */}
                  <Link to="/Contact">Contact</Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    
    
    
    
  <Switch>
          <Route path="/Intro">
            <Intro />
          </Route>
          <Route path="/Works">
            <Works />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
    
    
    
    
  </div>
  </Router>

  )
}


