import HomeComponents from '../components/home/homecomponents';
import NavBar from './../components/navbar';

const Home = () => {
    return (
        <div className='home'>
            <NavBar/>
            <HomeComponents/>
        </div>
    );
}
 
export default Home;