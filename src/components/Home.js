
import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="overlay">
        <img src="Id-photo.jpg" alt="Profile" className="profile-photo" />
        <h1>Hello, I'm <span>Srushti Nikam</span></h1>
        <p>Frontend Developer | Sotfware testing  | Programmer(Java,c,SQL)</p>
        <div className="buttons">
          <a href="/CV_CSE.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
