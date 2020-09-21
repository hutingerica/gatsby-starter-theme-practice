import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_c1imxoh', 'template_lwlarni', e.target, 'user_NFQFtfXw1MQf3w7B3v4QA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    );
}