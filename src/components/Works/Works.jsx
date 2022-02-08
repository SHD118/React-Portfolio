import './Works.css'

import React from 'react';
import weather from "../../images/Weather.gif"
import jsHW from "../../images/03-javascript-homework-demo.png";
import codingQuiz from "../../images/Coding_Quiz.gif";
import gamego from "../../images/GAMEGO.gif";
import notetake1 from "../../images/notetaker1.PNG";
import notetake2 from "../../images/notetaker2.PNG";
import socialmediaapi1 from "../../images/socialmediaapi1.PNG";
import socialmediaapi2 from "../../images/socialmediaapi2.PNG";
import socialmediaapi3 from "../../images/socialmediaapi3.PNG";
import socialmediaapi4 from "../../images/socialmediaapi4.PNG";


export default function Works() {
  return <div className='works'>
    <div>
      <div className='cardstyle'>
        <div className='row '>
          <div class="col">

            <div className="card border-primary mb-3 " style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">Weather Dashboard</h4>
                <p className="card-text">The purpose of this porject was to create a weather dashboard using openweathermap API. The user can enter any location around the world and view the current forecast as well as the future five day forecast.</p>
                <a href="https://github.com/SHD118/Weather-Dashboard" target="_blank"> <img src={weather} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">Password Generator</h4>
                <p className="card-text">This project was to build a random password generated. Due to the ongoing struggles to keep personal data secure a strong password is one of the first steps to stop people with malicious intent to hack into my personal accounts. </p>
                <a href="https://github.com/SHD118/Password-Generator" target="_blank">  <img src={jsHW} alt="weather"></img></a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-success mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">Coding Quiz</h4>
                <p className="card-text">The reason for creating this online coding quiz is to help brush up users' coding skills for things such as interview preparation or just to further their own understanding of fullstack.</p>
                <a href="https://github.com/SHD118/coding-challenging-quiz" target="_blank">  <img src={codingQuiz} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div></div>

      </div>
      <div className='cardstyle'>
        <div className='row'>
          <div class="col">
            <div className="card border-danger mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">GameGo</h4>
                <p className="card-text">Our mission is to create an app meant for game research purposes rather then for purchase options. The gaming community is spread far and wide and it was our job to consolidate all games for the convenience of the user. When using GameGo you can search by genre, console, and the number of players. </p>
                <a href="https://github.com/SHD118/coding-challenging-quiz" target="_blank">    <img src={gamego} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-warning mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">Note Taker</h4>
                <p className="card-text">The objective here was to use Express.js, Compass, mongoose, mongoDB to build a social network where the user can have a network of friends, react, and share opinions. </p>
                <a href="https://github.com/SHD118/Note-Taker" target="_blank">    <img src={notetake1} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
                <a href="https://github.com/SHD118/Note-Taker" target="_blank">    <img src={notetake2} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div>
          <div class="col">
            <div className="card border-info mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header">Web-based Application</div>
              <div className="card-body">
                <h4 className="card-title">Social Network API</h4>
                <p className="card-text">The objective here was to use Express.js, Compass, mongoose, mongoDB to build a social network where the user can have a network of friends, react, and share opinions.</p>

                <a href="https://github.com/SHD118/Social-Network-API" target="_blank">     <img src={socialmediaapi1} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
                <a href="https://github.com/SHD118/Social-Network-API" target="_blank">     <img src={socialmediaapi2} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
                <a href="https://github.com/SHD118/Social-Network-API" target="_blank">     <img src={socialmediaapi3} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
                <a href="https://github.com/SHD118/Social-Network-API" target="_blank">     <img src={socialmediaapi4} alt="weather"></img> </a>
                <br>
                </br>
                <br>
                </br>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

}
