import React from 'react'
import  airnite from "../images/airnite.png"
import { Link } from 'react-router-dom';
import vs from "../images/vs.png"
import hackerrank from "../images/hackerrank-logo.jpg"

function ProSection() {
  return (
    <div className="text-gray-200 bg-black">
        <div className="mx-auto px-4 py-12 ">

        <h1 className="text-center mb-8 text-4xl font-extrabold leading-none tracking-normal text-yellow-300 md:text-6xl md:tracking-tight">
        <span> Some </span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">  Projects completed ...</span>
        </h1>
          <div className="flex flex-wrap justify-center space-x-4 mb-32">
    
    <div className='container h-96 w-96 mb-8'>
          <Link to="https://airnite-llc.netlify.app/" className="group relative block bg-black">
      <img
        alt="project"
        src={airnite}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          Project
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Airnite LLC</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
            The Airnite LLC. is a real estate and marketing company that prides itself in allowing customers to view and have access to its affiliated properties, while also allowing users to negotiate prices.
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>

    <div className='container h-96 w-96 mb-8'>
    <Link to="https://644a4ad1ae4bb46e6ef42194--jovial-blancmange-3efbf6.netlify.app/" className="group relative block bg-black">
      <img
        alt="project"
        src={vs}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          project
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Virtual Schools</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              Virtual schools is an educational website app that integrates education in an online environment. At Vs, our “secret sauce” comes from our career-focused approach to learning.</p>
          </div>
        </div>
      </div>
    </Link>
    </div>

    <div className='container h-96 w-96 mb-8 '>
    <Link to="https://hacker-rank-delta.vercel.app/" className="group relative block bg-black">
      <img
        alt="project"
        src={hackerrank}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          project
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Hacker Rank Clone</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
            HackerRank  is a website app that helps companies develop the strongest tech teams around. We help
            candidates sharpen their tech skills and pursue job opportunities.
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>



          </div>
        </div>
        </div>

  )
}

export default ProSection