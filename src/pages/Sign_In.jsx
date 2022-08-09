import React from 'react'
import Signup from '../containers/Signin'
import Footer from '../containers/Footer'

export default function SignIn() {
  return (
    <>
      <div className="header">
        <Signup />
        <div className="brk"></div>
      </div>
      <div className='foot'>
        <Footer />
      </div>
    </>
  )
}
