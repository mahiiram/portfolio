import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../project/Heroimg2';
import Workcard from '../project/Workcard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
      <Workcard />
      <Footer />
    </div>
  )
}

export default Project;