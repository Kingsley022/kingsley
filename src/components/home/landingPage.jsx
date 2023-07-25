import Button from '../common/button';
import '../../styles/landingPage.css';
import {socials} from '../../data';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    const HandleRedirection = (url) =>{
        window.location.href = url
    }


    return (
        <div className="landingPage" id='Home'>
            <div className="textArea">
                <h1>-I'M KINGSLEY OKEREKE</h1>
                <h2>FRONTEND WEB DEVELOPER</h2>
                <p>I'm a creative and resourceful person who isn't afraid to face new challenges and actively seeking for new opportunities to <br/>exhibit and develop my skills.</p>
                <div className="socials">
                    {socials.map(social => (
                        <i key={social.id} className={social.iconn} onClick={() => HandleRedirection(social.url)}></i>
                    ))}
                </div>
                <Button placeholder={"MORE ABOUT ME"} onClick={() => navigate('/about')}/>
            </div>

        </div>
    );
}

export default LandingPage;