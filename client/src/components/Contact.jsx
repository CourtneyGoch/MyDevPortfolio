import { useContext } from 'react';
import DataContext from '../context/DataContext';


const Contact = () => {
  
  const  {
    isDarkMode } =  useContext(DataContext) ;

  return (
    <div
      name="contact"
      className={`w-full h-screen p-4 ${
        isDarkMode ? " bg-gradient-to-b from-gray-800 to-black  text-white"  : "bg-white text-gray-700"
      }`}
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl m-2 font-bold inline border-b-4">
            Wanna Talk ?
          </p>
          <p className="py-6"> Please leave your message here </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://formsubmit.co/Consci210@gmail.com"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={`p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode ? "border-gray-400" : "border-gray-500"
              }`}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className={`my-4 p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode ? "border-gray-400" : "border-gray-500"
              }`}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className={`p-2 border-2 rounded-md focus:outline-none ${
                isDarkMode ? "border-gray-400" : "border-gray-500"
              }`}
            ></textarea>

            <button
              type="submit"
              className= { "text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500"}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;