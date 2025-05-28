import React from 'react';
import "../Style/Home.css";
import image from "../Landingimage/img2.jpg";


function Home() {
  return (
    <div className="home-container">
      <div className="hero-banner">
        <img src={image} alt="Banner" className="banner-image" />
        <div className="overlay-text">
          <h1>Welcome to CSPDCL Raipur</h1>
          <p>Reliable power supply for every home, village, and industry in Chhattisgarh.</p>
          {/* <button className="hero-btn">Check Your Bill</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
