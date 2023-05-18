import React from "react";
import "aos/dist/aos.css";
import Contact from "./Contact";

const About = () => {
  return (
    <div className="about-container" id="onama">
      <div className="info">
        <h2 className="title">O našem OPG-u</h2>
        <p>
          Mi smo malo obiteljsko poljoprivredno gospodarstvo iz Zamršja,
          prekrasnog mjesta smještenog nedaleko od Karlovca u Hrvatskoj.
          Nazivamo se OPG Škarica i naša strast je pružiti svježe i kvalitetne
          proizvode našim lokalnim i širim zajednicama. Svaki član obitelji
          doprinosi svojim radom, stručnošću i ljubavlju prema poljoprivredi,
          stvarajući tako jedinstvenu i povezanu atmosferu koja se osjeti u
          svakom aspektu našeg poslovanja.
        </p>
        <p>
          Naša raznolika ponuda obuhvaća nekoliko vrsta proizvoda, a jedan od
          naših dragulja su hokkaido i butternut tikve. Uzgajamo ih s posebnom
          pažnjom, koristeći prirodne metode uzgoja i bez upotrebe pesticida.
          Ove tikve imaju prepoznatljive oblike, a njihova sočna i bogata pulpa
          savršena je za pripremu raznih jela. Od juha i pirea do pečenih
          delicija, hokkaido i butternut tikve donose prefinjen okus i obogaćuju
          vaše obroke.
        </p>
        <p>
          Uzgoj na našem OPG-u temelji se na tradiciji i održivosti. Vjerujemo u
          važnost lokalne i organske proizvodnje, te nastojimo očuvati naše
          okolišne resurse. Naše obiteljsko poljoprivredno gospodarstvo Škarica
          je posvećeno pružanju vrhunskih proizvoda koji potiču zdravu prehranu
          i podržavaju lokalnu zajednicu.
        </p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6895.109857864509!2d15.69242294227671!3d45.51198778331564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDMwJzM3LjUiTiAxNcKwNDEnMzYuMyJF!5e1!3m2!1shr!2shr!4v1684430448487!5m2!1shr!2shr"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>

      <Contact />
    </div>
  );
};
export default About;
