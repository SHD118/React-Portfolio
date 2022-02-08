import React from 'react';

export default function skills() {
    return <div className='skills'>



        <div class="container bars">

            <div class="row row-margin" style={{ marginTop: '4%' }}>

                <h3>C++</h3>
                <div className="progress">

                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />

                </div>

                <h3>Java</h3>
                <div className="progress">


                    <div className="progress-bar  bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>SQL</h3>
                <div className="progress">

                    <div className="progress-bar  bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>

                <h3>C</h3>
                <div className="progress">

                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>bash</h3>
                <div className="progress">

                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>SAS</h3>
                <div className="progress">

                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>C# / ASP.NET </h3>
                <div className="progress">

                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>VBA </h3>
                <div className="progress">

                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>PHP </h3>
                <div className="progress">

                    <div className="progress-bar " role="progressbar" style={{ width: '70%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <h3>JS</h3>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }} />
                </div>
                <h3>HTML</h3>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '95%' }} />
                </div>
                <h3>CSS</h3>

                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }} />
                </div>
            </div>







        </div>


    </div>;
}
