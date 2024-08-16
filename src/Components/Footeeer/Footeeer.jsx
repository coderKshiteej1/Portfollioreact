import React from 'react'
import './Footeeer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footeeer = () => {
  return (
    <div className='footer'>
        <div className='footeeer-top'>
            <div className='footeeer-top-left'>
                <img src={footer_logo} alt="" />
                <p>I am a full stack web developer from Punr , Maharashtra </p>
            </div>
            <div className='footeeer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type='email' placeholder='Enter Email'/>
                </div>
                

                <div className='footer-subscribe'> Subscribe </div>

            </div>
        </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024. All rights reserved</p>
        <div className='footer-bottom-right'>
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footeeer
