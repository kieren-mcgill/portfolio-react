import React from 'react';
import ReactDOM from 'react-dom/client';
import projects from "./projects";

const ProjectsCards = () => {
    return (
        projects.map((project) => {
            return (
                <div>
                    <div className="card border-dark mb-3 me-3">
                        <img className="card-img-top" src="./project-images/portfolio-pic.png"
                             alt="A screenshot of a portfolio project"/>
                        <div className="card-body text-dark">
                            <h5 className="card-title text-center">{project.title}</h5>
                            <p className="card-text text-center">{project.blurb}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href={project.GitHubRef} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-window-maximize fa-xl m-1"></i>
                                <small className="text-muted">Project</small>
                            </a>
                            <a href={project.GitHubPagesRef} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github fa-xl m-1"></i>
                                <small className="text-muted">Code</small>
                            </a>
                        </div>
                    </div>
                </div>
            )
        })
    )
}



const root = ReactDOM.createRoot(document.getElementById('project-cards'));
root.render(
    <ProjectsCards/>
);