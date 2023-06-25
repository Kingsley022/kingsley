import '../../styles/button.css';
const Button = ({placeholder, btnstyle, onClick}) => {
    return (
        <div className={`button ${btnstyle}`} onClick={onClick}>
            <span>{placeholder}</span>
            <i className='fa fa-arrow-right'></i>
        </div>
    );
}
 
export default Button;