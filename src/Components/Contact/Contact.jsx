 
 import React from 'react';
 import './Contact.css';
 import logo from '../../images/logo (2).jpg';
 import phone from '../../images/phone.jpg'
 import email from '../../images/email.jpg'
 import location from '../../images/location.jpg'
 
 export const Contact = () => {
   return (
     <div id='contact' className="contact"> 
       <div className="contact-title">
         <h1>Get in Touch</h1>
         <img src={logo} alt="" />
       </div>
       <div className="contact-section">
         <div className="contact-left">
           <h1>Let's Talk</h1>
           <p>
            I have thorough knowledge working with PHP, MySQL, HTML, CSS, Bootstrap, and JS.
           </p>
           <div className="contact-details">
             <div className="contact-detail">
               <img src=
               {email} alt=" " />
               <p>nikita@gmail.com</p>
             </div>
             <div className="contact-detail">
               <img src= {phone} alt=" " />
               <p>+91 xxxx-yyyy-89</p>
             </div>
             <div className="contact-detail">
               <img src={location} alt=" " />
               <p>India, Rajasthan, Jaipur</p>
             </div>
           </div>
         </div>
         <form className="contact-right">
           <label htmlFor="name">Your Name</label>
           <input type="text" name="name" id="name" placeholder='Enter your name' required />
           
           <label htmlFor="email">Your Email</label>
           <input type="email" name="email" id="email" placeholder='Enter your email' required />
           
           <label htmlFor="message">Write your message here</label>
           <textarea name="message" id="message" rows='8' placeholder='Enter your Message' required></textarea>
           
           <button type="submit" className='contact-submit'>Submit</button>
         </form>
       </div>
     </div>
   );
 };
 