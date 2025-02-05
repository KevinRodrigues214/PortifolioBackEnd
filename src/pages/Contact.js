
/* File Name : Contact.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import Navbar from "../pages/Navbar"; // Importing navbar

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {/*Creating kind of pop up  to show the message  */
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div className="contact-section">
    <Navbar /> 
    <div className="contact-container">
      
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>  
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        <Link to="/">
          <button>Submit</button>
         </Link>
      </form>
      </div>
</div>

    </>
  );
};

export default Contact;
