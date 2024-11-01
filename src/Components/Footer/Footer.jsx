import React from 'react'
import './Footer.css'

import footer from '../../images/footer.jpg'
import user from '../../images/user.jpg'

export const Footer = () => {
  return (
    <>
    <div id='footer' className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer} alt="" />
                <p>I am Frontend developer</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-button">
            <p className="footer-button-left">@ 😄 2024 nikita kumawat, All right 👍</p>
        </div>
    </div>
    </>
  )
}

