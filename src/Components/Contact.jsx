import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 200 });
  }, []);

  const form = useRef();
  const success = () => {
    // toast("Uspješno poslano!");
    toast.success("Uspješno poslano", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const error = () => {
    toast.error("Došlo je do pogreške, pokušajte ponovo!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
          success();
        },
        (error) => {
          console.log(error.text);
          error();
        }
      );
    form.current.reset();
  };

  return (
    <div className="kontakt" data-aos="fade-down" data-aos-anchor=".t-area">
      <h2>Naruči odmah:</h2>
      <form onSubmit={sendEmail} ref={form} netlify="true">
        <input type="text" name="name" placeholder="Ime i prezime:" required />
        <span id="naruci"></span>
        <input type="text" name="subject" placeholder="Naslov:" required />
        <textarea
          className="t-area"
          type="text"
          name="message"
          placeholder="Poruka:"
          cols="10"
          rows="7"
          required
        ></textarea>
        <input type="text" name="address" placeholder="Adresa:" required />
        <input type="email" name="email" placeholder="Vaš e-mail:" required />
        <button type="submit">Pošalji</button>
      </form>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default Contact;
