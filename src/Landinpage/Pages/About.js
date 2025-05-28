import React from 'react';
import '../Style/About.css';
import { Card } from 'antd';
import { ThunderboltOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import image from '../Landingimage/Mor Bijlee.jpg';

function About() {
  return (
    <div className='about-container'>
      <div className='about-section'>
        <Card className="about-image-card">
          <img src={image} alt="CSPDCL Overview" className="about-image" />
        </Card>

        <Card className='about-info'>
          <h1>About Us - CSPDCL Raipur</h1>
          <p>
            Chhattisgarh State Power Distribution Company Limited (CSPDCL) is responsible for power distribution in the state of Chhattisgarh.
            Our mission is to ensure reliable and efficient electricity supply to the people of the region.
          </p>
        </Card>
      </div>

      <section className="features-section">
        <div className="feature-box">
          <ThunderboltOutlined className="feature-icon" />
          <h3>Power Supply</h3>
          <p>Reliable and efficient electricity supply across urban and rural areas.</p>
        </div>
        <div className="feature-box">
          <EnvironmentOutlined className="feature-icon" />
          <h3>Service Area</h3>
          <p>Serving all districts of Chhattisgarh with a strong grid and service network.</p>
        </div>
        <div className="feature-box">
          <PhoneOutlined className="feature-icon" />
          <h3>24x7 Support</h3>
          <p>Call us anytime for outages, billing queries or new connections.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
