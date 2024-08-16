import React from 'react'
import './Hero.css'
import profile2 from '../../assets/profile2.jpeg'
import My_Resume from '../../assets/My_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile2} alt="" />
      <h1> <span>I'm Kshiteej Parkale</span> Full Stack Web Developer, based in Pune, Maharashtra </h1>
      <p>I am a Full Stack Web Developer from Pune, Maharashtra currently persuing my BE from Computer Engineering</p>
      <div className='hero-action'>
        <div className='hero-connect'><a href="#contact" className='anchor-link'>Connect With Me </a></div>
        <a href={My_Resume} className='hero-resume' target='_blank'>My Resume</a>
      </div>
    </div>
  )
}

export default Hero
