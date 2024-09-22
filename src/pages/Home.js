import React from "react";
import "../pages/styles/Home.css";


const Home = () => {
    return (
      <section className="home">
        <div className="home-content">
          <h1>Hi! I'm Bhanuka</h1>
          <img src={`${process.env.PUBLIC_URL}/images/home-image.jpg`} alt="Portfolio showcase" className="home-image" /><br></br>
          <a href={`/about`} className="cta-button">
            Get to know more about me!
          </a>
        </div>
      </section>
    );
  };

export default Home;