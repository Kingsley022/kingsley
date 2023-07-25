import { useState } from "react";
import Header from "../common/header";
import Button from "../common/button";
import { projects as myProjects} from "../../data";
import '../../styles/briefProjects.css';
import { useNavigate } from "react-router-dom";

const BriefProjects = () => {
    const navigate = useNavigate();
    const[projects, setProjects] = useState(myProjects);


    return (
        <div className="projectsContainer" id="Projects">
            <Header placeholder={'Projects'}/>

            <div className="projects">
                {projects.map( (project, index) => (
                     <div className="project" key={project.id} onClick={() => navigate('/project/' + index)}>
                        <div className="projectImg">
                            <img src={project.img}/>
                        </div>

                        <h3 className="description">{project.name}</h3>
    
                        {/* <div className="textArea"> 
                            <div className="language">{project.language}</div>
                            <ul>
                                {project.funtionalities?.map((functionality, index) => (
                                    <li key={index}>{functionality}</li>
                                ))}
                            </ul>                          
                            <div className="btns">
                                {project.weblink && <Button placeholder={'LIVE DEMO'} btnstyle={'btnStyle'} onClick={() => handleClick(project.weblink)}/>}
                                <Button placeholder={'GitHub'} btnstyle={'btnStyle'} onClick={() => handleClick(project.gitlink)}/>
                            </div>
                        </div> */}
                 </div>
                ))}
            </div>
        </div>
    );
}
 
export default BriefProjects;