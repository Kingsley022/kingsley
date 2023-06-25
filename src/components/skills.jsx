import '../styles/skills.css';
import Header from './common/header';
import { skills } from './data';
const Skills = () => {
    
    return (
        <div className="skillsContainer" id='Skills'>
            <Header placeholder={'Skills'}/>

            {skills.map(skill => (
                <div className="skillsCat" key={skill.id}>
                    <h2 className={skill.classname}>{skill.name}</h2>
                    <ul>
                        {skill.skillNames.map((skillName, index) => (
                            <li key={index}>{skillName.skill}</li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    );
}
 
export default Skills;