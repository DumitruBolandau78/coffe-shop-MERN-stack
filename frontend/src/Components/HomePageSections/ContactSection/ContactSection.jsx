import './ContactSection.scss';
import ButtonAnimation from '../../Utils/ButtonAnimation/ButtonAnimation';
import { useState } from 'react';

const ContactSection = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5500/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, email, phone, message
        })
      })
      .then(() => {
        alert('Thank you for your message');
        setEmail('');
        setUsername('');
        setMessage('');
        setPhone('');
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id='contact' className='contact-section'>
        <form onSubmit={handlerSubmit} className='form-email'>
            <h2 className="contact-section-title"><span>CONTACT</span> US</h2>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" id="name" placeholder='Name' required />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" required placeholder='Email' />
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" name="phone" id="phone" required placeholder='Phone number' />
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" required id="message" placeholder='Write a message...'></textarea>
            <ButtonAnimation className='submit' title={'Send'} />
        </form>
        <hr />
    </section>
  )
}

export default ContactSection