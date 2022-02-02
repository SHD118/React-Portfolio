import './Intro.css'
import React from 'react';
// import image from "././public/me.png"

export default function Intro() {
  return <div className='intro'>

    <div className="row" >
      <div className='col-sm'>
        <div className="banner">
          <img src="./sid.jpg" alt="Logo" />
        </div>
      </div>
    </div>
    <div className="row" >
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


  </div>;
}


{/* <div>
<div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Secondary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-success mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Success card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-danger mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Danger card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-warning mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Warning card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-info mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Info card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-light mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Light card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card border-dark mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Dark card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div> */}