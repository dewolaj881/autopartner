import React from 'react';
import emailjs from 'emailjs-com';
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_b5a8toc', 'template_fzt5frg', e.target, 'user_Q7jsW4yFUbd5dQNiLtm0S')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>
      <form action="?" method="POST" onSubmit={sendEmail}>
        <div class="g-recaptcha" data-sitekey="6Ldm0SQbAAAAAAQ9gu6QvXKe0HY85o15keGs4l5o"></div>
        <br />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      {/* <form  >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
    </div>
  );
}