/* File Name : About.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React from "react";
import Navbar from "../pages/Navbar";
import "./About.css"; // Arquivo de estilos

const About = () => {
  return (
    <div className="about-container">
      <Navbar /> {/*Adding a navbar.js */}
      
      {/*Body */}
      <div className="about-content">
      <h1>About Me</h1>
        <img src="/profile.jpg" alt="My Profile" className="profile-pic" />
        <div className="bio">
          <p>
            Hello! I'm Kevin Rodrigues, I am a Computer Science graduate with a Bachelor's degree, 
            and I am currently registered for a fast-track diploma in Software Engineering Technology at 
            Centennial College. With a year of experience in the tech industry, I am now focused on improving 
            my software engineering skills and expanding my knowledge in systems design, programming languages, 
            and software architecture.
          </p>
          <p>
          My ultimate goal is to complete my degree in Software Engineering at Centennial College and 
          use this knowledge to excel in the technology market. I am focused on gaining relevant work experience
          in Canada. In addition to my 
          studies, I want to improve my web development skills and build a solid portfolio that will help me get good 
          job opportunities. My long-term goal is to build a stable career as a software engineer in Canada, contributing
           to innovative and technological projects. I am also preparing to obtain certifications in the technology field to 
           increase my competitiveness in the market and expand my professional opportunities.
          </p>
          <a href="/Kevin_2025.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume-button">Check My Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
