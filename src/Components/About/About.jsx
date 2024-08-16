import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile1 from '../../assets/profile1.jpg'
import githublogo from '../../assets/githublogo.png'
const About = () => {
  return (
    <div id='about me' className='about'>

        <div className='about-title'>

            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-section'>
          <div className='about-lef'>
            <img src={profile1} alt="" />


          </div>
          <div className='about-right'>
            <div className='about-parag'>
              <p>I am an exprience full Stack web Developer</p>
              <p>Full stack web development</p>
            </div>
            <div className='about-skills'>
              <div className='about-skill'><p>Html</p> <hr style={{width:"80%"}} /></div>
              <div className='about-skill'><p>Css</p> <hr style={{width:"60%"}} /></div>
              <div className='about-skill'><p>Tailwind Css</p> <hr style={{width:"70%"}} /></div>
              <div className='about-skill'><p>Javascript</p> <hr style={{width:"60%"}} /></div>
              <div className='about-skill'><p>Bootstrap</p> <hr style={{width:"50%"}} /></div>
              <div className='about-skill'><p>React.js</p> <hr style={{width:"80%"}} /></div>
              <div className='about-skill'><p>Node.js</p> <hr style={{width:"60%"}} /></div>
              <div className='about-skill'><p>Express.js</p> <hr style={{width:"80%"}} /></div>
              <div className='about-skill'><p>MongoDB</p> <hr style={{width:"70%"}} /></div>
              <div className='about-skill'><p>Sql</p> <hr style={{width:"60%"}} /></div>
            
            </div>
          </div>
        </div>
        <div className='about-achivements'>
          <div className='about-achivement'>
            <p>Infosys Springboard certificate</p>
           
          </div>
          <hr />
          <div className='about-achivement'>
           
            <p>Full Stack Web Development Course certificate from Great Learning</p>
          </div>
          <hr />
       
          <div className='about-achivement'>
            <p><a href="https://www.linkedin.com/in/kshiteej-parkale-95a481255/" target='_blank'>Linkdein</a></p>
          </div>
          <hr />
          
          <div className='about-achivement'>
          <p> <a href='https://github.com/coderKshiteej1'target='_blank'>Github</a></p>
          </div>
          <hr />
        </div>
      
    </div>
  )
}

export default About
