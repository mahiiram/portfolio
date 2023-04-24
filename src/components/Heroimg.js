import React from 'react'
import './heroimg.css';
import { Link } from 'react-router-dom';
import newimg from "../assets/newimg.jpg";

const Heroimg = () => {
  return (
    <div className='heroimg'>
        <div className='mask'>
        <img className='introimg' src={newimg} alt="intro-img" />

        </div>
        <div className='content'>
            <p>Hi,I'm Mahendran</p>
            <h1>Full Stack Developer MERN</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimg