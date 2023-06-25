import LandingPage from "./landingPage";
import Skills from './skills';
import BriefAbout from './briefAbout';
import BriefProjects from './briefProjects';


const Home = () => {
    return (
        <>
            <LandingPage/>
            <Skills/>
            <BriefAbout/>
            <BriefProjects/>
        </>
    );
}
 
export default Home;