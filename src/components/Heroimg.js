import React from 'react'
import './heroimg.css';
import { Link,NavLink } from 'react-router-dom';
import newimg from "../assets/newimg.jpg";
import { FaDownload } from "react-icons/fa";
import resume from '../assets/MahendranResume.pdf'

const Heroimg = () => {
  return (
    <div className='heroimg'>
        <div className='mask'>
        <img className='introimg' src={newimg} alt="intro-img" />

        </div>
        <div className='content'>
            <p>Hi,I'm Mahendran</p>
            <h1>Full Stack Developer MERN</h1>
            <Link to="/project"> <button class="button-30" role="button">Project</button></Link>
            <NavLink to='https://drive.google.com/file/d/1J1aVpMBtgB3ZpuEd6QDJO1CkMdh45e3Z/view?usp=drive_link' target="blank">
            <button class="button-30" role="button">Resume</button>
          </NavLink>

        </div>
    </div>
  )
}

export default Heroimg