import './about.css'
import React from 'react';
import image from "../../images/sidD.jpg";
import image2 from "../../images/webdevsid.png";
import image3 from "../../images/Capture4.PNG";
import Typed from 'typed.js'


export default function Intro() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Hi... My Name is Siddharth Desai',
        "I am an ambitious full-stack developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return <div className='intro'>

    <div class='row'>
      <img src={image3} style={{ width: '40%', height: '30%', display: 'block', marginTop: '2%', marginLeft: 'auto', marginRight: 'auto', }} alt="Logo" />
      <h1 style={{ whiteSpace: 'pre', textAlign: 'center', marginTop: '4%' }} ref={el}></h1>

      <article style={{ marginLeft: '20%', marginRight: '20%', width: '60%', textAlign: 'center', PaddingTop: '1rem', PaddingBottom: '1rem' }}> My name is Siddharth Desai with a degree in Computer Science from NJIT. I kick started my career at Lockheed Martin where I worked in the roles of Software Engineer and Systems Engineer. At Lockheed Martin, I worked on many complex and exciting projects SCOT-Aegis which simulated the environment for operators in ships that used the Aegis Combat system. I learned tremendously about different weapon systems, radar, sensors, luminator trajectory mathematics and much more. The complex work at Lockheed helped me develop a strong work ethic and improve my overall knowledge on how to be a better engineer. I am currently working at PSEG based out of NJ and support various applications such as FileNet, McLaren, Axway,
        iManage and recently was given a new task to automate manual workflows, controls and upload data to a cloud environment. I have learned extensively about servers, security and network infrastructure.
        A little more about me is that I have a dog named Hiro and a beautiful wife named Neha. My wife recently started a job in Colorado so we moved here and I am working fully remote. Some of my hobbies are reading manga, watching anime, and studying different topics such as philosophy, hydroponics, and astronomy. I also love working out, hiking, playing sports and of course playing video games.
      </article>





    </div>



  </div >


}



