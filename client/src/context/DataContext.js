import { createContext ,useState } from "react";
const DataContext = createContext({}) ;

export const DataProvider = ({children}) => {
//     To toggle between light and dark mode
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const textColor = isDarkMode ? "text-white" : "text-gray-800";
    const bgColor = isDarkMode
      ? "bg-gradient-to-b from-gray-800 to-black"
      : "bg-white";
  


    return(
        <DataContext.Provider value={{
            
                isDarkMode ,
                setIsDarkMode ,
                toggleDarkMode ,
                textColor ,
                bgColor 
        }} >
            {children}   
        </DataContext.Provider>
    )
}

export default DataContext ;