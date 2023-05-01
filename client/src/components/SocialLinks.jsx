import React from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useContext } from 'react';
import DataContext from '../context/DataContext';


const SocialLinks = () => {
  
  const  {
    isDarkMode } =  useContext(DataContext) ;

  const links = [
    {
      id: 1,
      child: (
        <>
          Telegram <FaTelegram size={30} />
        </>
      ),
      href: "https://t.me/Astatine210",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/consci210",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1p0MVVvqBdLBelvFi5OLd5yHGgsAztNQc/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-gray-300";
  const linkColor = isDarkMode ? "text-white" : "text-gray-800";

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${bgColor} ${style}`}
          >
            <a
              href={href}
              className={`flex justify-between items-center w-full ${linkColor}`}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;