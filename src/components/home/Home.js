import React from "react";
import image from "../../images/backgroundImage.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <div className="child1">
        <h2>Grow your business with</h2>
        <h1>Thapa Technical</h1>

        <h3>We are the team of talented developer making websites</h3>
        <button className="btn">Get Started</button>
      </div>

      <div className="child2">
        <img className="frontImg" src={image} alt="image" />
      </div>
    </div>
  );
}

export default Home;
