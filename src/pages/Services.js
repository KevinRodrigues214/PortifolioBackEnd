/* File Name : Services.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React from "react";
import "./Services.css"; // Arquivo de estilos
import Navbar from "../pages/Navbar";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa"; // Ícones

const services = [ /*Creating a const to save all the informations about Services */
  {
    id: 1,
    title: "Web Development",
    description: "I build responsive and modern websites using the latest technologies.",
    icon: <FaLaptopCode size={40} color="#007bff" />,
    image: "/website.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "I develop cross-platform mobile applications with React Native.",
    icon: <FaMobileAlt size={40} color="#28a745" />,
    image: "/mobile.jpg",
  },
  {
    id: 3,
    title: "Custom Software Solutions",
    description: "I create custom software solutions tailored to your business needs.",
    icon: <FaCode size={40} color="#ff5733" />,
    image: "/Solution.jpg",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <Navbar />
      <div className="about-content">
      <h1>My Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.image && (
              <img src={service.image} alt={service.title} width="320" height="240" />
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Services;
