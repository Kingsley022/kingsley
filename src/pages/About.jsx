import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap} from 'react-icons/fa';
import {PiBagFill} from 'react-icons/pi';
import '../styles/about.css';
import { experiencies } from "../data";
import React from "react";
import logo from "../assets/logo2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();
    const[menu, setMenu] = useState([
        {label: 'Home', path: '/'}, 
        {label: 'Experience', path: '/about'}
    ]);
    
    return (
        <div className="about-container">
            <div className="nav">
                <img src={logo} alt=""/>
                <div className="navs">
                    {menu.map((m, index) => (
                        <p key={index} 
                            onClick={() => navigate(m.path)}
                           className={m.path === window.location.pathname ? 'menu-active' : ''}>{m.label}</p>
                    ))}
                </div>
            </div>
            <VerticalTimeline lineColor="#000" className="vert-container">
                {experiencies.map(exp => (
                    <React.Fragment key={exp.id}>
                        <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date={exp.date}
                        iconStyle={{
                            background: exp.category === 'education' ? '#222121' : '#06C7DA',
                            color: exp.category === 'education' ? '#fff' : '#000',
                        }}
                        icon={exp.category === 'education' ? <FaGraduationCap/> : <PiBagFill/>}
                        dateClassName="text"
                        >
                            <h3 className='vertical-timeline-element-title' style={{color:'#000'}}>
                                {exp.school}
                            </h3>
                            <p style={{color:'#111'}}>{exp.certification}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </div>
    );
}
 
export default About;