import './App.css';
import videobg from './backgroundvideo.mp4'
import profilepic from './profile.png'
import { motion } from "framer-motion"
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo_resize.png'
import About from './components/About'


function App() {
  return (
    
    <div className="App">
      
        <div className='overlay'></div>
        <video src={videobg} autoPlay loop muted />

      
      <div className="content">
        <ul className='navbar'>
          <li><img className='logo' src={logo}></img></li>
          <li><a href="./App.js">Home</a></li>
          <li><a href="default.asp">Experience</a></li>
          <li><a href="./About.js">About</a></li>
          <li><a href="default.asp">Contact me</a></li>


        </ul>
        <motion.div initial="hidden" animate="visible" variants={
              {
                hidden: {
                  scale: .8,
                  opacity:0
                },
                visible: {
                  scale: 1,
                  opacity:[0,0,1,1],
                  transition: {
                    delay:1.5
                  }
                }
              }
            } whileHover={
              {
                scale:1.2,
                transition:{
                  duration:.2
                }
              }
          
        }>
          <img className="profilepicture" src={profilepic}>
          
          </img>
          
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={
              {
                hidden: {
                  scale: .8,
                  opacity:0
                },
                visible: {
                  scale: 1,
                  opacity:[0,0,1,1],
                  transition: {
                    delay:1
                  }
                }
              }
            } whileHover={
              {
                scale:1.2,
                transition:{
                  duration:.2
                }
              }
            }>
        <h1>
          Matthew Aragaw
        </h1>
        <h2>Software Engineer</h2>
        </motion.div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={
              {
                hidden: {
                  scale: .8,
                  opacity:0
                },
                visible: {
                  scale: 1,
                  opacity:[0,0,1,1],
                  transition: {
                    delay:1
                  }
                }
              }
            }>
        <div className='info'>
          
          <h4>
          Software Engineering. Machine Learning. SDNs. Blockchains. And more. Check out my work!
        </h4>
        </div>
      </motion.div>


    </div>
    
  );
}

export default App;
