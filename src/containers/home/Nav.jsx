import React, { useEffect, useState } from 'react'
import logo from '../../components/image/Netflix-Logo.svg'
import './row.css'
import { NavLink } from 'react-router-dom'
export default function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
    return (
        <div className={`Browsenavcon ${show && "nav__black"}`}>
            <NavLink to='/' className="logo" >
                <img
                    src={logo}
                    alt=""
                    className="logo"
                />
            </NavLink>
            <button className="Buttonlink    nav-bttn">
                {JSON.parse(localStorage.getItem('Netflix-login-deta'))}
            </button>
        </div>
    )
}
