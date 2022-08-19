import React, { useState } from 'react'
import '../components/styles/Form.css'
import { NavLink } from 'react-router-dom'
import logo from '../components/image/Netflix-Logo.svg'

export default function Signin() {

    const [user, setUser] = useState({ firstName: "", lastName: "" })
    const [error, setError] = useState('');


    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setUser({ ...user, [name]: val })
    }

    const handleSignin = (event) => {
        event.preventDefault();

        // NB: since it's sign in not signup why don't you just redirect since you have the data saved already
        const firstName = JSON.parse(localStorage.getItem('Netflix-login-deta'))
        if (user.firstName === firstName) setError('User Already Exist');
        else window.open('./browse', '_blank')

        setUser({ firstName: "", lastName: "" })

        localStorage.setItem('Netflix-login-deta', JSON.stringify(user.firstName));
        localStorage.setItem('Netflix-SecondName', JSON.stringify(user.lastName));
    }

    const isInvalid = user.firstName === '' || user.lastName === '';

    return (
        <>
            <NavLink to='/' className="logo" >
                <img src={logo} alt="" className="logo" />
            </NavLink>

            <form className='base' onSubmit={handleSignin} method='POST'>
                <h2 className="SignIntitle">Sign In</h2>

                {error && <div className="error"> {error} </div>}

                <input
                    className='FormInput'
                    type="text"
                    placeholder='First Name..'
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    autoCapitalize="on"
                    autoComplete='off'
                />

                <input
                    className='FormInput'
                    type="text"
                    placeholder='Last Name..'
                    name='lastName'
                    value={user.lastName}
                    onChange={handleChange}
                    autoComplete='off'
                    autoCapitalize="on"
                />

                <button
                    className='buttonSign'
                    type='submit'
                    disabled={isInvalid}
                > Signin</button>

                <h3 className="text">New to Netflix? <a className='link' href='/signin'>Sign In Here</a> </h3>

                <h4 className="smalltext">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </h4>
            </form>

        </>

    )
}
