import React from 'react'
import Accodion from '../containers/Accodion'
import Jumbotron from '../containers/jumbotrin'
import Footer from '../containers/Footer'
import '../components/styles/style.css'
import OptForm from '../containers/Opt-form'
import Header from '../containers/Header'
import  {accordionData}  from '../components/fixtures/faqs'

export default function Main() {
  return (
    <div className="GloblalStyle">
      <Header />
      <div className="container">
        <Jumbotron />
        <div className="AccodionCon">
          <div className="AccodionTitle">Frequently Asked Questions</div>
          <div className="accordion">
            {
              accordionData.map(({ title, content }) => (
                <Accodion key={title} title={title} content={content} />
              ))}
          </div>
        </div>
        <OptForm />
        <Footer />
      </div>
    </div>

  )
}
