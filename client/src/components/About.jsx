import React, { useState } from "react";
import { useContext } from 'react';
// import DataContext from '../context/DataContext';


const About = () => {
  
  const  {
  textColor ,
  bgColor } =  useContext(DataContext) ;

  return (
    <div name="about" className={`w-full md:h-screen  ${bgColor} ${textColor}`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 leading-relaxed">
          I'm a front-end (soon to be a full-stack) developer who has a penchant
          for creating amazing websites, building and playing games, reading
          books, listening to podcasts, exploring new perspectives and ideas,
          going out for hikes, and writing. I'm also working on developing my
          skills in the fascinating fields of Artificial Intelligence and 3D
          Web Development.
        </p>

        <br />

        <p className="text-xl leading-relaxed">
          I value honesty and helping others above everything else, and I'm
          driven by the desire to make the world a better place and leave a
          lasting impact. My ultimate goal in life is to live a life of purpose .
          I'm excited to connect with you further and can't wait to see what we
          can achieve together! 🚀
        </p>
        <br />
        
      </div>
    </div>
  );
};


export default About;