import React from 'react'
import '../components/styles/style.css'

export default function footer() {
  return (
    <footer className='Footercontainer' >
        <div className="footertitle">Questions? Contact us.</div>
        <div className="Break"></div>
        <div className="row">
            <div className="column">
                <p className="link"><a href="/">FAQ</a></p>
                <p className="link"><a href="/">Investor Relations</a></p>
                <p className="link"><a href="/">Ways to Watch</a></p>
                <p className="link"><a href="/">Coporate Information</a></p>
                <p className="link"><a href="/">Netflix originals</a></p>
                <div className="Break"></div>
                <div className="Footertext">Netflix United Kingdom</div>

            </div>


            <div className="column">
                <p className="link"><a href="/">Help Center</a></p>
                <p className="link"><a href="/">Jobs </a></p>
                <p className="link"><a href="/">Terms of use</a></p>
                <p className="link"><a href="/">Contact us</a></p>
            </div> 

            
            <div className="column">
                <p className="link"><a href="/">Accounts</a></p>
                <p className="link"><a href="/">Redeem Gift Cards</a></p>
                <p className="link"><a href="/">Privacy</a></p>
                <p className="link"><a href="/">Speed Test</a></p>
            </div> 

            
            <div className="column">
                <p className="link"><a href="/">Media Center</a></p>
                <p className="link"><a href="/">Buy Gift Cards </a></p>
                <p className="link"><a href="/">Cookies Prefrences</a></p>
                <p className="link"><a href="/">Legal Notices</a></p>
                <div className="Footertext   responsive">Netflix United Kingdom</div>
            </div> 
           
        </div>
    </footer>
  )
}
