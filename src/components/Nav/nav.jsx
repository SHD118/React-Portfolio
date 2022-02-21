import "./nav.css";
import React from 'react';
import About from '../About/about.jsx'
import Contact from '../Contact/Contact.jsx'
import Works from '../Works/Works.jsx'
import Skills from '../Skills/skills.jsx'
import icon1 from '../../images/icon2.png'
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as
    Router, Route,
  Link, Switch
} from 'react-router-dom';


export default function Topper() {
  return (
    <Router>
      <div className='topper'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Intro">
              <img src={icon1}></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01"  >
              <ul className="navbar-nav me-auto" >

                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Features</a> */}
                  <Link to="/Intro">About </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Pricing</a> */}
                  <Link to="/Works">Works </Link>
                </li>
                <li className="nav-item ">
                  {/* <a className="nav-link" href="#">About</a> */}
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="nav-item ">
                  {/* <a className="nav-link" href="#">About</a> */}
                  <Link to="/Skills">Skills</Link>
                </li>


              </ul>
            </div>
          </div>
        </nav>




        <Switch>

          <Route path="/Intro">
            <About />
          </Route>
          <Route path="/Works">
            <Works />
          </Route>


          <Route path="/Skills">
            <Skills />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>




      </div>
    </Router>

  )
}


