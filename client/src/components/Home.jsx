
import HeroImage from "../assets/smiling-normal.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useContext } from 'react';
import DataContext from '../context/DataContext';


const Home = () => {
   
  const  {
    isDarkMode } =  useContext(DataContext) ;
    

  return (
    <div
      name="home"
      className={
        isDarkMode
          ? "h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
          : "h-screen w-full bg-white text-gray-800"
      }
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="my-4 font-bold">
            <div className="wrapper">
              <div className="typing-demo">
                Selam 👋🏽 Meet Helina
              </div>
            </div>
          </div>
          <p className="py-4 max-w-md">
            A passionate software developer from Ethiopia with over 2 years of
            experience in front-end development. She is a React enthusiast and
            loves building websites. When Helina isn’t coding, she can be found
            exploring new technologies and learning new skills.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className={
                isDarkMode
                  ? "group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white"
                  : "group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-800 cursor-pointer text-gray-200"
              }
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="avatar resembling Helina"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-4">
      </div>
    </div>
  );
};

export default Home;