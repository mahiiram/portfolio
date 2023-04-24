import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../project/Heroimg2';
import Aboutpage from '../About/Aboutpage';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="Im a friendly Full-Stack-Developer" />
      <Aboutpage />
      <Footer />
    </div>
  )
}

export default About