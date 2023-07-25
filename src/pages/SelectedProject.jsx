import '../styles/selectedProject.css';
import {LiaTimesSolid} from "react-icons/lia";
import { useNavigate, useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { projects } from './../data';



const SelectedProject = () => {
    const{id} = useParams();
    const project = projects[id];

    const[images, setImages] = useState(project.img_slides);
    const[currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    
    useEffect(() =>{
        const interval = setInterval(() => {
            if(currentIndex <= images.length-2){
                setCurrentIndex(prev => prev +1);
            }else if(currentIndex > images.length-2){
                setCurrentIndex(0)
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleClick = (url) =>{
        window.open(url, '_blank');
    }

    return (
        <div className="selected-project">
            <div className="status">
                <p style={{color: "#ed6161"}}>{project.status && "In Progress"}</p>
                <LiaTimesSolid className='icon' onClick={() => navigate('/')}/>
            </div>
            <div className="img-area">
                {images.map((image, index) => (
                    <img key={index} alt="" src={image} className={`img ${index === currentIndex && 'active-img'}`}/>
                ))}
                {images.length > 1 && <div className="dots">
                    {images.map((image, index) => (
                        <div key={index} className={`dot ${index === currentIndex && 'active-dot'}`} onClick={() => setCurrentIndex(index)}></div>
                    ))}
                </div>}
            </div>

            <div className="txt-area">
                <h3 className="sub-head">Breif Description</h3>
                <p>{project.description}</p>
                <div className="funtionalities">
                    <h3 className="sub-head">Functionalities</h3>
                    <ul>
                        {project.funtionalities.map((fun, index) => (
                            <li key={index}>{fun}</li>
                        ))}
                    </ul>
                </div>
                <div className="skills">
                    <h3 className="sub-head">Technologies</h3>
                    <ul>
                        {project.language.map((lan, index) => (
                            <li key={index}>{lan}</li>
                        ))}
                    </ul>
                </div>

                <div className="buttons">
                    <button onClick={() => handleClick(project.gitlink)}>Github</button>
                    {project.weblink && <button onClick={() => handleClick(project.weblink)}>Live Demo</button>}
                </div>
            </div>
        </div>
    );
}
 
export default SelectedProject;