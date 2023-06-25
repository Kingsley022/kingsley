import { useState } from "react";
import Header from "./common/header";
import Button from "./common/button";
import { projects as myProjects} from "./data";
import '../styles/briefProjects.css';

const BriefProjects = () => {
    const[projects, setProjects] = useState(myProjects);

    const toggleDetails = project =>{
        const newProjects = projects.map(newProject => {
            if(newProject.id === project.id){
                return {...newProject, isToggled: !newProject.isToggled};
            }else{
                return newProject
            }
        })
        setProjects(newProjects);
    }

    const handleClick = (url) =>{
        window.open(url, '_blank');
    }

    return (
        <div className="projectsContainer" id="Projects">
            <Header placeholder={'Projects'}/>

            <div className="projects">
                {projects.map( (project, index) => (
                     <div className="project" key={project.id}>
                        <div className="projectImg">
                            <img src={project.img}/>
                        </div>

    
                        <div className="textArea"> 
                            <div className="language">React.Js</div>                           
                            <p className="description">{project.description}</p>
                            <div className="btns">
                                <Button placeholder={'LIVE DEMO'} btnstyle={'btnStyle'} onClick={() => handleClick(project.weblink)}/>
                                <Button placeholder={'GitHub'} btnstyle={'btnStyle'} onClick={() => handleClick(project.gitlink)}/>
                            </div>
                        </div>
                 </div>
                ))}
               
            </div>
        </div>
    );
}
 
export default BriefProjects;