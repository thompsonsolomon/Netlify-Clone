import React, { useState } from 'react'
import Row from './Row'
import requests from '../../constants/requests'
import "./row.css"
import Banner from './Banner'
import Nav from './Nav'
// import Mode from './Mode'
// import Mode from './Mode.tsx'

const user1 = JSON.parse(localStorage.getItem('Netflix-login-deta'))
const user2 = JSON.parse(localStorage.getItem('Netflix-SecondName'))




function BrowseCon() {
  const [darkMode, setDarkMode] = useState(true)
  const [isActive, setisActive] = useState(true)



  const HandlelogOut = () => {
    localStorage.removeItem("Netflix-login-deta")
    localStorage.removeItem("Netflix-SecondName");
    window.open('./', '_self')

  }

  const handleToggle = () => {
    setisActive(current => !current)
  }


  return (
    // <div className="BroweCon">
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <Nav />
      <Banner />
      <Row islargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />

      <div
        className="overlayCon "
      >
        <span
          className='overlay'
          onClick={handleToggle}
        >
          <svg style={{ color: darkMode ? "white" : "black" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </span>
        <div
          style={{ display: isActive ? "none" : "block" }}
          className={darkMode ? ' overlaycontent overlaycontendark' : ' overlaycontent overlaycontenlight'}
        >
          {
            <div>
              <span> Current User  is :</span>
              <h3>{user1 + " " + user2}</h3>
            </div>
          }
          <p>
            this is a Netflix clone by Thompson Solomon.
            A student of cholatrek traning institute , using React js which is one of the most powerful js libray.
            To know more about react visit  <a href="react.com">React documentation</a>.
            To learn React js or more check out  <a href="cholatrek.io">cholatrek.io</a> for structured and supervised learning with cool mentors and awesome course mates
          </p>
          <div className="las">
            <button onClick={() => HandlelogOut()} className="LogOutButton">LogOut</button>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
              <div className="modeCon">
                <span>⛅</span>
                <input type='checkbox'
                  onChange={() => setDarkMode(!darkMode)}
                  className='checkbox'
                />
                <span>🌒</span>
              </div>
            </div>
          </div>
          <h3> {darkMode ? 'Dark' : 'Light'} Mode is cool</h3>

        </div>
      </div>
    </div>
  )
}


export default BrowseCon;