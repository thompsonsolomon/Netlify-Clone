























































import React, { useState } from 'react'
import './row.css'
// import { ChangeEventHandler } from 'react'

const setDark = () => {
    localStorage.setItem("theme" , "dark");
    const [ darkMode, setDarkMode] = useState(false)
}

const setlight = () => {
    localStorage.setItem("theme" , "light");
    const [ lightMode, setlightMode] = useState(false)
}

const storedTheme = localStorage.getItem("theme");

const prefersDark =
 window.matchMedia &&
window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
storedTheme === "dark" || (storedTheme === null && prefersDark);

if(defaultDark){
    setDark();
}

const toggleTheme = (e) =>{
    if (e.target.checked){
        setDark();
    }else{
        setlight();
    }
;}
export default function Mode() {
  return (
    <div className='toggle-theme-wrapper'>
        <span>⛅</span>
        <label className='toggle-theme' htmlFor="checkbox">
            <input
            className='checkbox'
            type="checkbox"
             id="checkbox"
             onChange={toggleTheme}
             />
        </label>
        <span>🌒</span>
    </div>
  )
}
