import React from 'react';
import "./about.css";
import { Link } from 'react-router-dom';
import pxfuel from "../assets/pxfuel.jpg"
import image2 from "../assets/emre-turkan-KULAXcZZ22U-unsplash (1).jpg"
const Aboutpage = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I</h1>
        <p>I am a Full Stack Web Developer.Skills that i have learned to explore 
          and develop the websites is Html, Css, Javascipt, React, Nodejs
          ,Bootstrap ,Mysql, MongoDB
        </p>
        <Link to="/contact">
          <button className="btn" >Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={pxfuel} alt='pixel'/>
          </div>
          <div className='img-stack bottom'>
            <img src={image2} alt='React'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage;