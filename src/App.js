import Topper from "./components/Topper/Topper"
import React, { useState } from 'react';
import Intro from "./components/Intro/Intro"
import Works from "./components/Works/Works"
import Contact from "./components/Contact/Contact"
import {BroswerRouter as   
  Router, Route,
  Link, Switch} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Topper />
      {/* <div className="section"> */}
      {/* <Intro  /> */}
      {/* </div> */}

      {/* <div className="section"> */}
      {/* <Works /> */}
      {/* </div> */}

      {/* <div className="section"> */}
      {/* <Contact /> */}
      {/* </div> */}
</div>
    // </div>
  );
}

export default App;
