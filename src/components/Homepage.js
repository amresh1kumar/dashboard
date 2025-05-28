import React from "react";
import "./CSS/Homepage.css";

const Homepage = () => {
  return (
    <div className="card-container" style={{ marginTop: "50px" }}>
      <div className="card pink">
        <div className="card-title">
          <h3>Total Number of Employee</h3>
          <p>
            <span>Total : </span>100
          </p>
        </div>
      </div>

      <div className="card blue">
        <div className="card-title">
          <h3>Total Number of Regular Employee</h3>
          <p>
            <span>Total : </span>90
          </p>
        </div>
      </div>

      <div className="card green">
        <div className="card-title">
          <h3>Total Number of Contract Employee</h3>
          <p>
            <span>Total : </span> 80
          </p>
        </div>
      </div>

      <div className="card orange">
        <div className="card-title">
          <h3>Total Number of Traning Employee</h3>
          <p>
            <span>Total : </span> 70
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
