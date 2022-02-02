import './Works.css'

import React from 'react';

export default function Works() {
  return <div className='works'>
    <div>
      <div className='cardstyle'>
        <div className='row '>
          <div class="col">

            <div className="card border-primary mb-3 " style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Secondary card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-success mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Success card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div></div>

      </div>
      <div className='cardstyle'>
        <div className='row'>
          <div class="col">
            <div className="card border-danger mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Danger card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-warning mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Warning card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-info mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Header</div>
              <div className="card-body">
                <h4 className="card-title">Info card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

}
