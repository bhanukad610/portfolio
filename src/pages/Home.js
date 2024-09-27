import React from "react";
import "../pages/styles/Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
      <section className="home">
        <div className="home-content">
          <h1>Hi! I'm Bhanuka</h1>
          <img 
            src={`${process.env.PUBLIC_URL}/images/home-image.jpg`} 
            alt="Portfolio showcase" 
            className="home-image" 
          />
          <br />
          <Link to="/about" className="cta-button">
          Get to know more about me!
        </Link>
        </div>
    </section>
    );
  };

export default Home;