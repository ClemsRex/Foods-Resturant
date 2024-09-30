import React from 'react'
import darkPng from "../../assets/website/darkpng.png"
import lightPng from "../../assets/website/lightpng.png"
import { useState, useEffect } from 'react';

const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        <img
          // src={theme === "dark" ? darkPng : lightPng}
          src={lightPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl absolute right-0 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        />
        <img
          src={darkPng}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 rounded-2xl"
        />
      </div>
    </>
  );
};

    export default DarkMode
    
    
  

// const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ?
//     localStorage.getItem("theme") : "light" 
// );
// const element = document.documentElement;

// React.useEffect(() => {
//     if(theme === "dark"){
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark")
//     }else{
//         element.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//     }
// },[theme]);

// const changeTheme = () => {
//     if (theme === "light"){
//         setTheme("dark");
//     } else {
//         setTheme("light");
//     }
// };
// return (
//   <>
//    <div className="relative ">
//      <img 
//     src={darkPng} 
//     alt="" 
//     onClick={changeTheme} 
//     className="w-12 absolute right-0 z-10 cursor-pointer  box-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>
    
//     <img 
//     src={lightPng} 
//     alt="" 
//     onClick={changeTheme}
//     className="w-12 absolute right-0 z-10 cursor-pointer  box-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>
//    </div>
//   </>

// )
// }
