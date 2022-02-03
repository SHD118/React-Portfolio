import './about.css'
import React from 'react';
import image from "../../images/sidD.jpg";
import image2 from "../../images/webdevsid.png";
import image3 from "../../images/Capture4.PNG";

// import Typed from 'typed.js';

// var options = {
//   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//   typeSpeed: 40
// };

// var typed = new Typed('.element', options);


export default function Intro() {
  return <div className='intro'>

    {/* <div className="row" >
      <div className='col-sm'>
        <div className="banner">
          <img src={image} style={{ width: '20%', height: '20%', float: 'left', marginTop: '5%', marginLeft: '5%' }} alt="Logo" />
        </div>
      </div>
    </div> */}

    <div className='container '>
      <div className="row " >
        {/* <h1>{typed}</h1> */}
        {/* <div className='col-sm'>
    <h1>Siddharth Desai</h1>
          </div> */}
        <div className='col-sm'>
          <div className="banner">
            {/* <img src={image} style={{ width: '70%', height: '80%', float: 'right', marginTop: '5%', marginLeft: '5%' }} alt="Logo" /> */}
            <img src={image3} style={{ width: '40%', height: '30%', float: 'right', marginTop: '5%', marginLeft: '5%' }} alt="Logo" />
          </div>
        </div>




      </div>
    </div>

    <div class="container bars">
      <div class="row row-margin">
        <h3>HTML CSS Javascript</h3>

        <div className="progress">

          <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />

          <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
          <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
        </div>

        <h3>C++</h3>
        <div className="progress">

          <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />

        </div>
        <h3>JS</h3>

        <div className="progress">

          <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h3>Java</h3>
        <div className="progress">


          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <h3>HTML</h3>
        <div className="progress">

          <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
        </div>


      </div>
    </div>




  </div >


}



