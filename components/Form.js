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
    <div className="md:flex block bg-gray-200 h-full">
      <div className="md:block bg-cover no-repeat bg-center hidden bg-road w-1/2">
      </div>
      <div className="block mx-auto md:pt-0 md:my- text-center">
        <h1 className="pt-14 mx-auto text-3xl font-russo border-b-2 border-red-600 w-32 text-center mb-6">Kontakt</h1>
        <form className="pb-14" action="?" method="POST" onSubmit={sendEmail} >
          <div>
            <input placeholder="Imię i Nazwisko" className="lg:w-96 w-72 bg-gray-100 rounded-lg p-1 my-2" type="text" name="name" />
          </div>
          <div>
            <input placeholder="Email" className="lg:w-96 w-72 bg-gray-100 rounded-lg p-1 my-2" type="email" name="email" />
          </div>
          <div>
            <textarea placeholder="Wiadomość" className="lg:w-96 w-72 bg-gray-100 rounded-lg p-1 my-2" name="message" />
          </div>
          <div class="g-recaptcha" data-sitekey="6Ldm0SQbAAAAAAQ9gu6QvXKe0HY85o15keGs4l5o"></div>
          <input className="bg-red-500 lg:w-96 w-72 text-white cursor-pointer font-bold rounded-xl px-4 py-2" type="submit" value="Wyślij wiadomość" />
        </form>
      </div>
    </div>
  );
}