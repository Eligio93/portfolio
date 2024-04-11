import { useState } from 'react'
import projectsList from '../projects.json'
import { v4 as uuidv4 } from 'uuid';
import gitIcon from "../assets/gitIconFooter.svg"
import liveIcon from "../assets/liveIcon.svg"


import Footer from "./Footer"
import Header from "./Header"



export default function Projects() {
    const [projects, setProjects] = useState(projectsList)
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
                                            {project['tech-stack'].map((tech, techIndex) => {
                                                return <div className="project-list-tech" key={uuidv4()} >
                                                    <img src={tech.icon} alt="tech_icon" />
                                                    <p>{tech.name}</p>
                                                </div>
                                            }
                                            )}
                                        </div>
                                        <div className="project-list-btns">
                                        <button className="project-list-repo" onClick={()=>window.open(`${project.gitHub}`,'_blank')}>
                                                <img src={gitIcon} alt="" />
                                                <p>See Code</p>
                                            </button>
                                            <button className="project-list-live" onClick={()=>window.open(`${project.live}`,'_blank')} >
                                                <img src={liveIcon} alt="" />
                                                <p>Watch Live</p>
                                            </button>
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
                                                return <div className="project-list-tech" key={uuidv4()} >
                                                    <img src={tech.icon} alt="tech_icon" />
                                                    <p>{tech.name}</p>
                                                </div>
                                            }
                                            )}
                                        </div>
                                        <div className="project-list-btns">
                                            <button className="project-list-repo" onClick={()=>window.open(`${project.gitHub}`,'_blank')}>
                                                <img src={gitIcon} alt="" />
                                                <p>See Code</p>
                                            </button>
                                            <button className="project-list-live" onClick={()=>window.open(`${project.live}`,'_blank')} >
                                                <img src={liveIcon} alt="" />
                                                <p>Watch Live</p>
                                            </button>
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