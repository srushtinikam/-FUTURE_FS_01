
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'Srushti_Nikam',   // 🔥 Replace with your EmailJS Service ID
      'template_baw3seg',  // 🔥 Replace with your EmailJS Template ID
      form.current,
      'LXKm0CYdvdnODr6zF'    // 🔥 Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        alert('✅ Message sent successfully!');
      },
      (error) => {
        alert('❌ Failed to send message. Please try again.');
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}
