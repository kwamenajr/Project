import { useRef } from "react";
import foodie from "../images/Jollof1.jpg";
import "../styles/Contact.css";
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i9hctu4', 'template_bxk4n8w', form.current, 'FXZtZRgVpnNTEr6kF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
      );
    e.target.reset();

  };
  return (
    <Element name="Contact">
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${foodie})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form ref={form} onSubmit={sendEmail} id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
