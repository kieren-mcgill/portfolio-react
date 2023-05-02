import React from "react";

const ProjectsCards = ({projectInfo}) => {
    return (
        projectInfo.map((project) => {
            return (
                <>
                    <div className="card border-dark mb-3 me-3">
                        <img className="card-img-top height: " src={`images/${project.image}`}
                             alt="A screenshot of a portfolio project"/>
                        <div className="card-body text-dark">
                            <h5 className="card-title text-center red-el">{project.title}</h5>
                            <p className="card-text text-center">{project.blurb}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-around">
                            <a href={project.URL} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-window-maximize fa-xl m-1 blue-el"></i>
                                <small className="text-muted">Project</small>
                            </a>
                            <a href={project.GitHubRef} target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github fa-xl m-1 blue-el"></i>
                                <small className="text-muted">Code</small>
                            </a>
                        </div>
                    </div>
                </>
            )
        })
    )
}

export default ProjectsCards