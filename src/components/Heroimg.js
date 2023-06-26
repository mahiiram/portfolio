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
            <Link to="/project" className="btn">Projects</Link>
            <NavLink to={resume} target="blank">
            <button class="btn">
              {" "}
              download CV{" "}
              <FaDownload
                size={16}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </button>
          </NavLink>

        </div>
    </div>
  )
}

export default Heroimg