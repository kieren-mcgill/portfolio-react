import React from 'react';
import ReactDOM from 'react-dom/client';
import projects from "./projects";
import ProjectsCards from "./ProjectCards";



const root = ReactDOM.createRoot(document.getElementById('project-cards'));
root.render(
    <ProjectsCards projectInfo={projects}/>
);