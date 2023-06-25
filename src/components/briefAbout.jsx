import Header from "./common/header";
import '../styles/briefAbout.css';
import Button from './common/button';

const BriefAbout = () => {
    return (
        <div className="briefAboutContainer" id="About">
            <Header placeholder={'About me'}/>

            <div className="briefAbout">
                <div className="textArea">
                    <p>I'm <b>KINGSLEY OKEREKE, FRONTEND WEB DEVELOPER</b>  with three year of experience. <br/><br/> I got an <b>ADVANCED DIPLOMA IN SOFTWARE ENGINERRING</b> and also learnt from one of the best software engineer <b>CODE WITH MOSH</b>, 
                    where i gained extra knowledge on most programming languages.</p><br/>
                    <p>I'm a creative and a fast learner whose ready to explore new opportunities to exhibit my skills, add more to the software communities and develop my skills as well.</p><br/>    
                    <p>I'm currently advancing on being a <b>FULLSTACK</b> web developer to add more value and creativity to the <b>SOFTWARE ECO-SYSTEM</b>.</p>

                    <Button placeholder={'MORE ABOUT ME'} btnstyle={'btnstyle'}/>
                </div>
                <div className="imageArea">
                    <img src="../images/profile2.jpeg"/>
                </div>
            </div>
        </div>
    );
}
 
export default BriefAbout;