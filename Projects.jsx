"use client"
import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

import { DiJavascript1, DiMongodb, DiGit } from 'react-icons/di';

import { SiTailwindcss } from 'react-icons/si';

import { SiBootstrap } from 'react-icons/si';

function Projects() {
  return (
    <div className='bg-transparent p-6 rounded-lg shadow-md h-'>
      <h2 className='text-3xl font-bold text-center mb-8'>Experience</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <FaReact className='text-4xl text-blue-600 mb-2' />
          <h3 className='text-xl font-semibold'>React</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <FaNodeJs className='text-4xl text-green-600 mb-2' />
          <h3 className='text-xl font-semibold'>Node.js</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <FaHtml5 className='text-4xl text-orange-600 mb-2' />
          <h3 className='text-xl font-semibold'>HTML5</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <FaCss3Alt className='text-4xl text-blue-500 mb-2' />
          <h3 className='text-xl font-semibold'>CSS3</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <SiTailwindcss className='text-4xl text-blue-400 mb-2' />
          <h3 className='text-xl font-semibold'>Tailwind CSS</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <SiBootstrap className='text-4xl text-purple-600 mb-2' />
          <h3 className='text-xl font-semibold'>Bootstrap</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <DiJavascript1 className='text-4xl text-yellow-500 mb-2' />
          <h3 className='text-xl font-semibold'>JavaScript</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <DiMongodb className='text-4xl text-green-700 mb-2' />
          <h3 className='text-xl font-semibold'>MongoDB</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <DiGit className='text-4xl text-orange-600 mb-2' />
          <h3 className='text-xl font-semibold'>Git</h3>
        </div>
        <div className='flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300'>
          <h3 className='text-xl font-semibold'>More Skills</h3>
          <p className='text-gray-600'>I have experience with various other technologies and tools that enhance my development workflow.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
