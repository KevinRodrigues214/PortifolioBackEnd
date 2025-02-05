
/* File Name : Projects.js 
   Studnet ID: 301415475
   Name: Kevin Assuncao Rodrigues
   Date : 2/4/2025
 */
import React from "react";
import "./Projects.css"; 
import Navbar from "../pages/Navbar";

const projects = [/*Creating a const to save all the informations about projects  */
  {
    id: 1,
    title: "Game Dragon Ball Z",
    description: "Developed together with 2 classmates, a 2D game inspired by the Dragon Ball universe, with interactive gameplay and immersive visuals implemented functionalities such as character movement, combat mechanics, and a basic scoring system, designed graphical elements and scripted features using GDScript to optimize the player experience",
    link: "",
    video: "/Project1.mp4"
  },
  {
    id: 2,
    title: "Order Management Chatbot - JavaScript, Node.js",
    description: "Developed together with 2 classmates an interactive chatbot for a restaurant, enabling automated customer service and seamless menu selection. Structured menu data and interaction stages using JavaScript, ensuring logical navigation between welcome messages, order summaries, payment options, and order finalization and designed modular files to manage menu items and interaction stages, facilitating easy maintenance and system scalability ", 
    video: "/Project2.mp4"
    
  },
  {
    id: 3,
    title: "Website - C#, HTML, ASP.NET, SQL",
    description: "Collaborated with 4 classmates to develop a web-based platform to streamline gym membership management, enabling user-friendly online registration and personalized fitness tracking, implemented CRUD operations and database connectivity using SQL and C# for efficient client data management and designed and developed web pages with HTML and ASP.NET, ensuring responsive and intuitive navigation",
    
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
        <Navbar /> 
        <div className="projects-content">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.video && (
              <video width="320" height="240" controls>
                <source src={project.video} type="video/mp4" />
               
              </video>
            )}
            
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
