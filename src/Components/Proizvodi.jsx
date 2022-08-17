import React, { useState } from "react";
import eggs from "../Images/Jaja.jpg";
import butternut from "../Images/butternut1.jpg";
import hokkaido from "../Images/hokkaido1.jpg";

import Proizvod from "./Proizvod";

const Proizvodi = () => {
  const [proizvodi, setProizvode] = useState([
    {
      name: "Batat",
      price: "12 kn/kg",
      about:
        "Tzv. slatki krumpir, narančaste boje, koji je iznimno bogat vitaminima, mineralima i antioksidansima te je poznat svojim brojnim doprinosima u zdravlju crijeva, očiju, moždanim funkcijama i imunitetu. U usporedbi s običnim krumpirom ima manje ugljikohidrata i kalorija. Najzdraviji je bez da se guli, a priprema mu je raznolika: kao pire, umak, juha, kuhan, pečen, pržen - primjena mu je raznolika, kao i njegove zdravstvene prednosti. ",
      image: hokkaido,
    },
    {
      name: "Butternut tikve",
      price: "4 kn/kg",
      about:
        "Butternut tikva, bogata je vitaminima, mineralima i vlaknima. Njeno narančasto meso, slatkastog okusa podsjeća na lješnjak te je iz tog razloga savršen odabir za pripremu krem juha, pirea, pita te ostalih slatkih jela. Poznata je kao namirnica koja pomaže u skidanju kilograma zbog svoje niskokaloričnosti te ima protuupalno djelovanje.",
      image: butternut,
    },
    {
      name: "Hokkaido tikve",
      price: "18 kn/kg",
      about:
        "Ova se sorta smatra pravim blagom za ljubitelje bundeva, osim velike količine vitamina, aminokiselina i makronutrijenata, pogodna je i za dijetsku hranu te se odlično slaže s ostalim povrćem i mesom. Osim toga, bundeva ne gubi na vrijednosti ni nakon zamrzavanja što znači da možete dugo uživati u povrću.",
      image: hokkaido,
    },
    {
      name: "Jaja",
      price: "20 kn/10 kom",
      about:
        "Svakodnevno svježa jaja, ubrana našim rukama tijekom cijelog dana. Naše kokoši slobodno šetaju u prirodnome okruženju, hrane se zrnjem iz lokalnog uzgoja, svježe pokošenom travom te ostalim kukcima na koje naiđu tijekom dana, spavaju zaštićene pod krovom, a od ranog jutra uživaju u slobodi i upijaju zrake sunca.",
      image: eggs,
    },
  ]);

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
    </div>
  );
};
export default Proizvodi;
