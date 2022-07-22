import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_160rwrc",
        "template_mntvuww",
        form.current,
        "sMngd7k5ZoiOkllAp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div id="kontakt">
      <h2>Naruči odmah:</h2>
      <form onSubmit={sendEmail} ref={form}>
        <input type="text" name="name" placeholder="Ime i prezime:" />
        <input type="text" name="subject" placeholder="Naslov:" />
        <textarea
          type="text"
          name="message"
          placeholder="Poruka:"
          cols="20"
          rows="10"
        ></textarea>
        <input type="text" name="address" placeholder="Adresa:" />
        <input type="email" name="email" placeholder="Vaš e-mail:" />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};
export default Contact;
