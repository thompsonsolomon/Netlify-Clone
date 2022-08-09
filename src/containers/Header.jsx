import React from 'react'
import '../components/styles/style.css'
import '../components/styles/Form.css'
import HeaderCon from '../constants/HeaderCon'

export default function header() {
  return (
    <div className="header">
      <HeaderCon />
      <div className="features">
        <h1 className="featuretitle">Unlimited films, Tv programs and more </h1>
        <h2 className="featuresubtitle">Watch anywhere. Cancle at any time </h2>

        <div className='AccodionCon '>
          <div className='OptFormContainer'>
            <div className="optforminput">
              <input type="text" className="optFormInput" placeholder='Email address' />
              <button className="optFormButton">Try it now ></button>
            </div>
            <p className="optFormText">Ready to watch? Enter your email to creat or restart our membership </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
