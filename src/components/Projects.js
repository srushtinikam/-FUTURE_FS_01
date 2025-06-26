
import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="project-card">
        <h3>Web Development Portfolio</h3>
        <ul>
          <li><strong>Tech Used:</strong> HTML, CSS, JavaScript</li>
          <li>A portfolio website showcasing my projects and skills.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Be Organic</h3>
        <ul>
          <li><strong>Tech Used:</strong> Frontend - HTML, CSS, JavaScript; Backend - PHP; Database - MySQL</li>
          <li>A reliable organic product ordering system providing healthier options to customers.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Secured and Reliable Charity System</h3>
        <ul>
          <li>A charity platform with secure transactions, donor verification, and tracking.</li>
          <li><strong>Tech Used:</strong> Frontend - HTML, CSS, JavaScript; Backend - PHP; Database - MySQL</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Cloud-based Education Portal (Android App)</h3>
        <ul>
          <li><strong>Tech Used:</strong> Flutter, HTML, CSS, JavaScript, UI/UX Design</li>
          <li>Centralized portal for resources, assignments, announcements, and feedback for students.</li>
        </ul>
      </div>
    </section>
  );
}
