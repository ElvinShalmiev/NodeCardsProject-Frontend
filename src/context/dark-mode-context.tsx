import { ChildProps } from '../@types';
import { createContext, useState } from "react";
import { DarkModeContextType } from "../@types";

//initial state:
const initialState: DarkModeContextType = {
  darkMode: true,
  
toggleDarkMode: () => {},
};

//create the context:
const DarkModeContext = createContext<DarkModeContextType>(initialState);

const DarkModeContextProvider = ({ children }: ChildProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </>
  );
};

export { DarkModeContext, DarkModeContextProvider };
export default DarkModeContext;