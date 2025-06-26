
import React from "react";
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-heading">My <span>Resume</span></h2>
      <p className="resume-text">Check out my resume below.</p>
      <a href="/CV_CSE.pdf" download className="download-button">
        Download My Resume
      </a>
    </section>
  );
}
