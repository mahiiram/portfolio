import './footer.css'
import React from 'react';
import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left-div'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
            <p>11W, Emp Colony</p>
            <p>Theveram-625530</p>
            </div>
            </div>
            <div className='phone'>
                <p>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                9786047798   
                </p>
            </div>  
            
            <div className='email'>
                <p>
                <NavLink to="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                 Mahendran.ramar9797@gmail.com 
                </NavLink>
                 
                </p>
            </div> 
        </div>
        <div className='right-div'>
            <h4>About Me</h4>
            <p>This is me Mahendran Ramar, Full Stack Web Developer With a
                passion for learning and creating
            </p>
            <div className='social'>
                <p>
                <NavLink to="https://github.com/mahiiram">
                 <FaGithub size={20} style={{color:"#fff", marginRight:"2rem"}}/>GitHub</NavLink>
                </p>
                 <p>
                 <NavLink to="https://www.linkedin.com/in/mahendran-ramar9797/">
            <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}}/>Linkedin
            </NavLink>
                 </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
