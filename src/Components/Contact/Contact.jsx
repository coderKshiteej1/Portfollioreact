import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {


const[result,setResult] = useState("setResult")
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81a09d1a-13ce-421d-a719-34ef8ed82a0a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anythung that you want me to work on. You can contact anytime</p>
        <div className='contact-details'>
          <div className='contact-detail'>
                <img src={mail_icon} alt="" /> <p>kshiteejparkale42@gmail.com</p>
          </div>
          <div className='contact-detail'>
                <img src={call_icon} alt="" /> <p>9422054809</p>
           </div>
           <div className='contact-detail'>
                 <img src={location_icon} alt="" /> <p>Pune, Maharashtra</p>
           </div>
        </div>
        </div>
        <form onSubmit={onSubmit}  className='contact-right'  >
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter yoyr name' name='name' />
        <label htmlFor="">Enter email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor=""> Write your message here</label>
        <textarea name="message" placeholder='Enter your message' rows="8"></textarea>
        <button type='submit' className='contact-submit'>Submit</button>

      </form>
      </div>
     
    </div>
  )
}

export default Contact
