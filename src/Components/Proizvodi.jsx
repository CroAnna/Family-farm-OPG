import React, { useState } from "react";
import eggs from "../Images/small/Jaja.jpg";
import butternut from "../Images/small/butternut1.jpg";
import hokkaido from "../Images/small/hokkaido1.jpg";
import batat from "../Images/small/batat1.jpg";
import lavander from "../Images/small/lavanda-img.jpg";

import Proizvod from "./Proizvod";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Proizvodi = () => {
  const proizvodi = [
    {
      name: "Hokkaido tikve",
      price: "10 kn/kg",
      about:
        "Ova se sorta smatra pravim blagom za ljubitelje bundeva, osim velike količine vitamina, aminokiselina i makronutrijenata, pogodna je i za dijetsku hranu te se odlično slaže s ostalim povrćem i mesom. Osim toga, bundeva ne gubi na vrijednosti ni nakon zamrzavanja što znači da možete dugo uživati u povrću.",
      image: hokkaido,
    },
    {
      name: "Lavanda 🆕",
      price: "5 kn/kom",
      about:
        "Njen ugodan miris i ljubičasti cvijet koristi se u mnoge svrhe. Lavanda je poznata ljetovita biljka koja je važna i u kozmetičkoj industriji, djelotvorna je kao lijek kod prehlada dok njen osušeni cvijet opušta i smiruje ljude te omogućuje bolji san. Izuzetna korist lavande je i da odbija insekte poput komaraca, moljaca i muha. Iz tog razloga se vrećice lavande često postavljaju po kući i u ormare.",
      image: lavander,
    },
    {
      name: "Jaja",
      price: "15 kn/10 kom",
      about:
        "Svakodnevno svježa jaja, pobrana našim rukama tijekom cijelog dana. Naše kokoši slobodno šetaju u prirodnome okruženju, hrane se zrnjem iz lokalnog uzgoja, svježe pokošenom travom te ostalim kukcima na koje naiđu tijekom dana, spavaju zaštićene pod krovom, a od ranog jutra uživaju u slobodi i upijaju zrake sunca.",
      image: eggs,
    },
    {
      name: "Batat",
      price: "- nije još dostupno -",
      about:
        "Tzv. slatki krumpir, narančaste boje, koji je iznimno bogat vitaminima, mineralima i antioksidansima te je poznat svojim brojnim doprinosima u zdravlju crijeva, očiju, moždanim funkcijama i imunitetu. U usporedbi s običnim krumpirom ima manje ugljikohidrata i kalorija. Najzdraviji je bez da se guli, a priprema mu je raznolika: kao pire, umak, juha, kuhan, pečen, pržen - primjena mu je raznolika, kao i njegove zdravstvene prednosti. ",
      image: batat,
    },
    {
      name: "Butternut tikve",
      price: "- nije još dostupno -",
      about:
        "Butternut tikva, bogata je vitaminima, mineralima i vlaknima. Njeno narančasto meso, slatkastog okusa podsjeća na lješnjak te je iz tog razloga savršen odabir za pripremu krem juha, pirea, pita te ostalih slatkih jela. Poznata je kao namirnica koja pomaže u skidanju kilograma zbog svoje niskokaloričnosti te ima protuupalno djelovanje.",
      image: butternut,
    },
  ];

  return (
    <div>
      <div className="proizvodi-container" id="proizvodi">
        {proizvodi.map((proizvod, index) => (
          <Proizvod
            name={proizvod.name}
            price={proizvod.price}
            about={proizvod.about}
            image={proizvod.image}
            key={proizvod.name}
          />
        ))}
      </div>
      <div className="btn-gallery">
        <a href="../galerija">
          <button>
            Više fotografija <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </a>
      </div>
    </div>
  );
};
export default Proizvodi;
