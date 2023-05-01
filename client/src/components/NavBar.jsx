import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useContext ,useState } from 'react';
// import DataContext from '../context/DataContext';

const NavBar = () => {

  const  {
   isDarkMode ,
  toggleDarkMode} =  useContext(DataContext) ;
  
  const [nav, setNav] = useState(false);

  
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className={`flex justify-between items-center w-full h-20 px-4 text-${isDarkMode ? 'white' : 'black'} bg-${isDarkMode ? 'black' : 'white'} fixed`}>
      <div>
     
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only" onChange= {toggleDarkMode} checked={isDarkMode} />
            <div className={`block bg-${isDarkMode ? 'white' : 'black'} w-14 h-8 rounded-full`} />
            <div className={`dot absolute left-1 top-1 ${isDarkMode ? 'bg-black' : 'bg-white'} w-6 h-6 rounded-full transition`}/>
          </div>
          <div className={`ml-3 text-${isDarkMode ? 'white' : 'black'} font-medium`}>
            {isDarkMode ? "🌙" : "☀️"}
          </div>
        </label>
     
      </div>

      <ul className={`hidden md:flex text-${isDarkMode ? 'white' : 'black'}`}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200`}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 text-${isDarkMode ? 'white' : 'black'} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white`}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl`}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};


  
  export default NavBar;