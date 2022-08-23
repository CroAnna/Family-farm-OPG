import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 200 });
  }, []);
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
    <div className="kontakt" data-aos="fade-down" data-aos-anchor=".t-area">
      <h2>Naruči odmah:</h2>
      <form onSubmit={sendEmail} ref={form} netlify="true">
        <input type="text" name="name" placeholder="Ime i prezime:" />
        <input type="text" name="subject" placeholder="Naslov:" id="naruci" />
        <textarea
          className="t-area"
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
