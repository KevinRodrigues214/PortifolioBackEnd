/* File Name : Home.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 
/*importing the files and React*/

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </header>

      {/*Body */}
      <main className="home">
      <div className="home-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my projects, skills, and services.</p>
        <Link to="/about">
          <button className="cta-button">Learn More About Me</button>
        </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
