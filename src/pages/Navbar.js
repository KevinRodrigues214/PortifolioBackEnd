/* File Name : NavBar.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Estilos separados para o Navbar

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
