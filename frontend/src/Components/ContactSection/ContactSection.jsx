import './ContactSection.scss';
import ButtonAnimation from '../../Components/ButtonAnimation/ButtonAnimation'

const ContactSection = () => {
  return (
    <section id='contact' className='contact-section'>
        <form className='form-email' action="/send-email" method="post">
            <h2 className="contact-section-title"><span>CONTACT</span> US</h2>
            <input type="text" name="name" id="name" placeholder='Name' required />
            <input type="email" name="email" id="email" required placeholder='Email' />
            <input type="number" name="phone" id="phone" required placeholder='Phone number' />
            <textarea name="message" required id="message" placeholder='Write a message...'></textarea>
            <ButtonAnimation className='submit' title={'Send'} />
        </form>
        <hr />
    </section>
  )
}

export default ContactSection