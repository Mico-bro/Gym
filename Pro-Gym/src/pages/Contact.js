import React from 'react'
import Likes from '../assets/sport/16.jpg'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide' style = {{ backgroundImage:`url(${Likes})`}}>
    </div>
    <div className='rightSide'>
    <h1>Contact</h1>
    <form id='contact-form' method='POST'>
    <label htmlFor='name'>Full Name</label>
    <input name='name' placeholder='Enter full name ...' type='text' required />
    <label htmlFor='bmi'>BMI</label>
    <input name='bmi' placeholder='Enter BMI ...' type='number' required/>
    <label htmlFor='phone'>Phone</label>
    <input name='phone' placeholder='Enter phone ...' type='number' required/>
    <label htmlFor='email'>Email</label>
    <input name='email' placeholder='Enter email ...' type='email' required/>
    <label htmlFor='message'>Message</label>
    <textarea rows='6' placeholder='Enter message type of workout ...' name='message' type='text' required  />
    <button type='submit'>Submit message</button>

    </form>
    </div>
    
    </div>
  )
}

export default Contact;