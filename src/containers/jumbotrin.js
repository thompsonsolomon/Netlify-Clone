import React, { Fragment } from 'react'
import '../components/styles/style.css'
import jumboData from '../components/fixtures/jumbo.json'
export default function Jumbotron() {
  return (
    <>
      {
        jumboData.map((item, index) => (
          <div className="Inner" style={{ flexDirection: item.direction }} key={index} >
            <Fragment>
              <div className="pane">
                <h1 className='title'>{item.title}</h1>
                <h2 className='subtitle'>{item.subTitle}</h2>
              </div>
              <div className="paneTwo">
                <img className='image' src={item.image} alt={item.alt} />
              </div>
            </Fragment>
          </div>
        ))
      }
    </>
  )
}
