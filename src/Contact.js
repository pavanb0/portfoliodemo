import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const Contacts = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.name,form.email,form.message)
    // console.log(e)
    emailjs.send(
      'service_8hiplu4',
      'template_8r319ol',
      {
        from_name: form.name,
        to_name: 'Pavan', 
        from_email: form.email,
        to_email: 'pavanbagwe16@gmail.com', 
        message: form.message,
      },
      'HhM9DJVJFr_A0F7On' 
    ).then(
      alert('Thank you. I will get back to you as soon as possible.')
       
    ).then(
      setForm({
        name: '',
        email: '',
        message: '',
      })
    ).catch ((err)=>{
      alert("error in sending the mail")
    })

    console.log('Form submitted:', form);

    
 
  };

  return (
    <section id="contact">
      <div className="custom-card">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
