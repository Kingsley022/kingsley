import '../../styles/header.css';
const Header = ({placeholder}) => {
    return (
        <h1><span><i className='fa fa-'>~</i> </span>{placeholder}<span> <i className='fa fa-'>~</i></span></h1>
    );
}
 
export default Header;