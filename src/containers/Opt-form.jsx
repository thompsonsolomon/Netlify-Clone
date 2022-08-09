import React from 'react'
import '../components/styles/style.css'

export default function OptForm() {
    return (
        <div>
            <div className='OptFormContainer'>
                <div className="optforminput">
                    <input type="text" className="optFormInput" placeholder='Email address' />
                    <button className="optFormButton">Try it now > </button>
                </div>
                <p className="optFormText">Ready to watch? Enter your email to creat or restart our membership </p>
            </div>
        </div>
    )
}
