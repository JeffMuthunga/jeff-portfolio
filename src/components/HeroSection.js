import React from 'react'
import jeffImg from "../images/Jeff.jpeg"
import { Link } from 'react-router-dom';
import "./herosection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function HeroSection() {
  return (
    


<div className="relative bg-black text-white py-20 ">
  <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
    <h1 className="text-center mb-8 text-4xl font-extrabold leading-none tracking-normal text-rose-600 md:text-6xl md:tracking-tight">
        <span>Jeff </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Wainaina</span>
        </h1>
      <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Full Stack Web developer
      </h2>Hey there! I'm Jeff, a techie in progress, and I'm thrilled to welcome you to my world. Besides diving into coding adventures, I enjoy the occasional adventure outdoors, cherishing the company of friends and family. Together, let's embark on a brand new journey filled with curiosity, growth, and a whole lot of fun. Buckle up, and let's make some tech magic happen!
      <p className="text-sm md:text-base text-gray-50 mb-4">   </p>
      <div>
      <Link
      to="https://github.com/JeffMuthunga"
      className="bg-rose-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-green-700"
    >
      <span className="mr-2">
        <FontAwesomeIcon icon={faGithub} />
      </span>
      Raid My Github
      <span className="ml-2">
        <FontAwesomeIcon icon={faShare} />
      </span>
    </Link>



        </div>
    </div>
    <div className="relative p-8 md:pt-64 md:pb-64 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
      <div className="h-48 flex flex-wrap content-center">
        
      <div className="relative h-128 w-128 mt-12 md:ml-72">
  <img
    className="rounded-lg inline-block mr-0 md:mt-0 p-8 md:p-0 object-contain w-full h-full md:h-auto"
    alt="haha"
    src={jeffImg}
  />
</div>

  
          </div>
          </div>
        </div>
      </div>

  )
}

export default HeroSection