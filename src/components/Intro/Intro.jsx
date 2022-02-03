import './Intro.css'
import React from 'react';
import image from "../../images/me.png";



export default function Intro() {
  return <div className='intro'>

    {/* <div className="row" >
      <div className='col-sm'>
        <div className="banner">
          <img src={image} style={{ width: '20%', height: '20%', float: 'left', marginTop: '5%', marginLeft: '5%' }} alt="Logo" />
        </div>
      </div>
    </div> */}
    <div className='container'>
      <div className="row" >
        <div className='col-sm'>
          <div className="banner">
            <img src={image} style={{ width: '100%', height: '80%', float: 'left', marginTop: '5%', marginLeft: '5%' }} alt="Logo" />
          </div>
        </div>
        <div className='col-sm'>
          <div className="cardForm">
            <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className="cardForm">
            <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className="cardForm">
            <div className="card border-primary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

    <div class="container bars">
      <div class="row">
        <div>
          <div className="progress">
            <h1>JS</h1>
            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
}



