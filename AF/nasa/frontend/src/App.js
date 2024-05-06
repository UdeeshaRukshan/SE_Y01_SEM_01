import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Homepage/Home';
import About from './Components/AboutNasa/About';
import UserProfile from './Components/UserProfile/UserProfile';
//import { Earth } from './Components/Earth/Earth';
import EarthScene from './Components/Earth/EarthScene';
//import PictureOfTheDay from './Components/PictureOfTheDay/PictureOfTheDay';
import EarthCamera from './Components/EarthCamera/Earthcamera.js';
import MarsRover from './Components/MarsRover/Marsrover.js';
// import Contact from './Contact';
import Weather from './Components/Weather/weather.js';
import SignInSide from './Components/UserProfile/SignIn/SignIn.js';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/earthimages" element={< EarthCamera/>} exact />
          <Route path="/mars" element={<MarsRover/>}/>
          <Route path="/home" element={< Home/>} exact />
          <Route path="/earth" element={<EarthScene/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/sign " element={<SignInSide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
