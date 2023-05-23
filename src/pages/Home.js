// Home.js
import React from 'react';
import Social from '../components/Social';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import DescriptionStats from '../components/DescriptionStats';
import SkillsTiles from '../components/SkillsTiles';
import ProjectsSection from '../components/ProjectsSection';
import ProSection from '../components/ProSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Social />
      <NavBar />  
        <HeroSection />
        <DescriptionStats />
        <SkillsTiles />
        <ProjectsSection />
        <ProSection />
        <Footer />
      
    </div>
  );
}

export default Home;
