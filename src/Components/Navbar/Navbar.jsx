import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
const[menu, setMenu] = useState("home");
const menuuRef = useRef();
const openMenuu = () => {
  menuuRef.current.style.right="0";
}
const closeMenuu = () => {
  menuuRef.current.style.right="-350px";
}
  return (
    <div className='navbar'>
      <img src={logo} alt=''/>
     
      <ul rel={menuuRef} className='nav-menuu'>
        
        
        <li><AnchorLink  href="#home"className='anchor-link'> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  href="#services"  className='anchor-link'> <p onClick={()=>setMenu("services")}>Services</p></AnchorLink> {menu==="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  href="#contact" className='anchor-link'> <p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  href="#work" className='anchor-link'> <p onClick={()=>setMenu("work")}>Work</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink  href="#about me" className='anchor-link'><p onClick={()=>setMenu("about me")}>About me</p></AnchorLink>{menu==="about me"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className='nav-connect'><a href="#contact" className='anchor-link'>Connect with Me</a></div>
    </div>
  )
}

export default Navbar
 