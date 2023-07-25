import { useState } from 'react';
import { myNavLinks } from "../../src/data";
import { Link } from 'react-scroll';
import logo from"../assets/logo2.png";
import '../styles/navbar.css';


const NavBar = () => {
    const[navLinks, setNavLinks] = useState(myNavLinks);
    const[menu, setMenu] = useState(false);

    const checkActive = navLink =>{
        const newLinks = navLinks.map(newLink => {
            if(newLink.id === navLink.id){
                return {...newLink, isActive: true};
            }else{
                return {...newLink, isActive: false};
            }
        });
        setNavLinks(newLinks);
    };

    const toggleMenu = () =>{
        setMenu(!menu);
    };

    return (
        <div className="navBarContainer">
            <img src={logo} alt='' className="logo"/>

            <ul className={menu ? "active" : undefined}>
                {navLinks.map((navLink) => (
                    <Link 
                            key={navLink.id}
                            to={navLink.name} 
                            spy={true}  
                            onClick={() =>checkActive(navLink)} 
                            smooth={true} 
                            offset={-80} 
                            delay={500}
                            activeClass='activeLink'
                            className='li'
                        >
                            {navLink.name}
                        </Link>
                ))}
            </ul>

            <div className="menu" onClick={toggleMenu}>
                {menu ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </div>
        </div>
    );
}
 
export default NavBar;