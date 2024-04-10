import { useState } from 'react'
import projectsList from '../projects.json'

import Footer from "./Footer"
import Header from "./Header"



export default function Projects() {
    const [projects, setProjects] = useState(projectsList)
    console.log(projects);


    return (
        <>
            <Header />
            <div className="projects-container">
                {projects.map((project, index) => {
                    return (
                        <div className="listed-project" key={index}>
                            {index % 2 == 0 ? (
                                <>
                                    <img src={project['desktop-image']} alt="project-img-preview" />
                                    <div className="project-list-info">
                                        <p className='project-list-title'>{project.title}</p>
                                        <p className='project-list-description'>{project.description}</p>
                                        <div className="project-list-stack">
                                            {project['tech-stack'].map((tech) => {
                                                return <div className="project-list-tech">
                                                     <img src={tech.icon} alt="tech_icon" />
                                                     <p>{tech.name}</p>

                                                </div>
                                                
                                               
                                            }
                                            )}
                                        </div>



                                        <div className="project-list-btns">
                                            <button className="project-list-repo">See Code</button>
                                            <button className="project-list-live">Watch Live</button>
                                        </div>

                                    </div>

                                </>

                            ) : (
                                <>
                                    <div className="project-list-info">
                                        <p className='project-list-title'>{project.title}</p>
                                        <p className='project-list-description'>{project.description}</p>
                                        <div className="project-list-stack">
                                            {project['tech-stack'].map((tech) => {
                                                return <img src={tech.icon} alt="tech_icon" />
                                            }
                                            )}
                                        </div>
                                        <div className="project-list-btns">
                                            <button className="project-list-repo">See Code</button>
                                            <button className="project-list-live">Watch Live</button>
                                        </div>
                                    </div>
                                    <img src={project['desktop-image']} alt="project-img-preview" />

                                </>
                            )}

                        </div>
                    )
                })}
            </div>

            <Footer />
        </>
    )

}