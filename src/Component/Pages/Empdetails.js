import React from 'react';
import '../Style/Empdetails.css'; 

function Empdetails() {
  return (
    <div className="empdetails-container">
      <h2>Employee Details</h2>

      {/* Personal Details */}
      <section className="emp-section">
        <h3>Personal Details</h3>
        <input type="text" placeholder="Full Name" />
        <input type="date" placeholder="Date of Birth" />
        <input type="text" placeholder="Father's Name" />
      </section>

      {/* Contact Details */}
      <section className="emp-section">
        <h3>Contact Details</h3>
        <input type="text" placeholder="Mobile Number" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
      </section>

      {/* Qualification Details */}
      <section className="emp-section">
        <h3>Qualification Details</h3>
        <input type="text" placeholder="Highest Qualification" />
        <input type="text" placeholder="Passing Year" />
        <input type="text" placeholder="University/Board" />
      </section>

      {/* Family Details */}
      <section className="emp-section">
        <h3>Family Details</h3>
        <input type="text" placeholder="Spouse Name" />
        <input type="number" placeholder="Number of Children" />
      </section>

      {/* Office Details */}
      <section className="emp-section">
        <h3>Office Details</h3>
        <input type="text" placeholder="Post" />
        <input type="text" placeholder="Office Location" />
        <input type="time" placeholder="Beginning Time" />
        <input type="time" placeholder="Ending Time" />
      </section>
    </div>
  );
}

export default Empdetails;
