import React from 'react'
import './Contact.css'
import img_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_39f0nso', 'template_3mntvtc', form.current, {
        publicKey: 'xq-HnJ9jF2Z79VwU5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send us a message  <img src={img_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis adipisci minima laudantium, eaque odio quo tempora quis et nulla consequatur inventore quisquam. Officia eos deleniti voluptates saepe dolore natus tenetur!</p>
        <ul>
            <li><img src={mail_icon} alt="" />Kellishbond@gmail.com</li>
            <li><img src={phone_icon} alt="" />+234 234-234-232</li>
            <li><img src={location_icon} alt="" />12 google Ave, tech <br /> MA 02139, Techland state</li>
        </ul>
        </div>
        <div className="contact-col">
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name"  placeholder='Enter your name' required/>
      <label>Email</label>
      <input type="email" name="from_email"   placeholder='Enter your mobile number' required/>
      <label>Message</label>
      <textarea name="message" rows='6' placeholder='enter your message' required />
      <button type='submit' value="Send"   className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
    </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact