import React from 'react'
import '../Css/Contact.css'

const Contact = () => {

  const handleForm=(e)=>{
    e.preventDefault()
     console.log(e.entries())
  }

  return (
    <div className="form-body">
    <div className="contact-form-container">
    <form className="contact-form">
      <h2>Contact Us</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required/>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" required/>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
  </div>
  )
}

export default Contact
