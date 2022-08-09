import React, { useState } from 'react'
import '../components/styles/Form.css'
import { NavLink } from 'react-router-dom'
import logo from '../components/image/Netflix-Logo.svg'
export default function Signin() {
    const [Name, setName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [error, setError] = useState('');
    const isInvalid = Name === '' || SecondName === '';
    const HandleSignin = (event) => {
        event.preventDefault();
        if (Name === JSON.parse(localStorage.getItem('Netflix-login-deta'))) {
            setError('User Already Exist');
        }
        else {
            window.open('./browse', '_self')
        }
        setName('')
        setSecondName('')
        localStorage.setItem('Netflix-login-deta', JSON.stringify(Name));
        localStorage.setItem('Netflix-SecondName', JSON.stringify(SecondName));
        alert('You will be logged in as ' + Name);
    }
    return (
        <>
            <NavLink to='/' className="logo" ><img src={logo} alt="" className="logo" /></NavLink>

            <form className='base' onSubmit={HandleSignin} method='POST'>

                <h2 className="SignIntitle">Sign In</h2>
                {error && <div className="error">{error}</div>}
                <input className='FormInput' type="text"
                    placeholder='First Name..'
                    value={SecondName}
                    onChange={({ target }) => setSecondName(target.value)}
                    autoCapitalize="on"
                    autoComplete='off'
                />
                <input className='FormInput' type="text"
                    placeholder='Last Name..'
                    value={Name}
                    onChange={({ target }) => setName(target.value)}
                    autoComplete='off'
                    autoCapitalize="on"
                />
                <button
                    className='buttonSign'
                    type='submit'
                    disabled={isInvalid}
                > Signin</button>
                <h3 className="text">New to Netflix? <a className='link' href='/signin'>Sign In Here</a>
                </h3>
                <h4 className="smalltext">
                    This page is protected by Google
                    reCAPTCHA to ensure you're not a bot.
                    Learn more.
                </h4>
            </form>

        </>

    )
}
