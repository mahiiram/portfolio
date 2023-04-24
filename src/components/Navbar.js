import React, {useState} from 'react';
import './navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
const [bar,setBAr] = useState(false);
const handleBar = () => setBAr(!bar);

const[color,setColor]=useState(false);

const changecolor = () =>{
    if(window.scrollY >= 100){
        setColor(true);
    }else{
        setColor(false);
    }
};

window.addEventListener("scroll", changecolor);
  return (
    <div className='header'>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul className={bar ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleBar}>
            {bar ? (<FaTimes size={20} style={{color:"#fff"}} />) 
            :
            (<FaBars size={20} style={{color:"#fff"}} />)}
            
            
        </div>
    </div>
  )
}

export default Navbar