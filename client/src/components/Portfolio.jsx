import React from "react";
import candyCrush from "../assets/portfolio/candy.png";
import enkokilish from "../assets/portfolio/enkokilish.png";
import netflix from "../assets/portfolio/netflix-clone.jpg"
import { useContext } from 'react';
// import DataContext from '../context/DataContext';

const Portfolio = () => {

  const  {
    isDarkMode ,
    bgColor } =  useContext(DataContext) ;
    

  const portfolios = [
    {
      id: 1,
      src: netflix ,
      alt: "Netflix Clone",
      description : "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. Here I recreated the front-end of Netflix with a Firebase back-end! I used the TMDB API for all of the data and Firebase Authentication to give login functionality. I used Firestore which is cloud storage with Firebase to save data. The front-end is styled with Tailwind CSS.The site was deployed using Firebase hosting. ",
      demoLink: "https://netflix-react-83882.web.app/",
      codeLink: "https://github.com/consci210/netflix",
    }
    ,
    {
      id: 2,
      src: enkokilish,
      alt: "Enkokilish project",
      description: "A web application for hosting quizzes on various topics. It allows users to choose from a selection of topics and presents them with a series of questions. The application was designed and built from scratch by leveraging the ReactJS library , vanilla CSS , and Firebase for real-time database updates and user authentication. The quiz questions are fetched from the Open Trivia DB API 🌐 using the Axios library, and scores are stored in the Firebase database. The application is responsive and can be accessed on multiple devices 📱💻.",
      demoLink: "https://enkokilish.netlify.app/",
      codeLink: "https://github.com/consci210/-Enkokilish-",
    },
    {
      id: 3,
      src: candyCrush,
      alt: "Candy Crush project",
      description: "A web App Game that I developed using React. The game involves matching candies of the same color to progress through different levels. The game utilizes React's component-based architecture and state management features to create a seamless and responsive gaming experience. The game logic is implemented using vanilla JavaScript and CSS, and the game data is stored using browser's local storage API. The game features a score tracker and timer.It was a great project to learn drag and drop features of react and asynchronous functions .",
      demoLink: "https://candy-crush-react21.netlify.app/",
      codeLink: "https://github.com/consci210/Candy-Crush-Game-",
    },
  ];

  return (
    <div
      name="portfolio"
      className={`bg-${bgColor}  ${isDarkMode ? 'text-white' : 'text-gray-800'} w-full ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-black' : 'bg-white'} `}
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className={`text-4xl font-bold inline border-b-4 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-black' : 'border-gray-300'}`}>
            Portfolio
          </p>
          <p className={`py-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Check out some of my work right here</p>
        </div>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, description, demoLink, codeLink }) => (
            <div key={id} className={`shadow-md ${isDarkMode ? 'shadow-gray-600' : 'shadow-gray-200'} rounded-lg p-4`}>
              <figure className="flex flex-col">
                <img
                  src={src}
                  alt={alt}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <figcaption className={`text-sm py-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</figcaption>
              </figure>
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-700'}`}>
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ${isDarkMode ? 'hover:text-blue-500' : 'hover:text-blue-700'}`}>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Portfolio;