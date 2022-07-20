import React, { useState } from "react";
import corn from "../Images/corn.jpg";
import batat from "../Images/batat.jpg";
import eggs from "../Images/eggs.jpg";
import Proizvod from "./Proizvod";

const Proizvodi = () => {
  const [proizvodi, setProizvode] = useState([
    {
      name: "Batat",
      price: "5 kn/kg",
      about:
        "Donec quis aliquam velit, sit amet sodales justo. Proin quis consectetur diam. Cras ac urna tempor sem sollicitudin consequat sed rhoncus risus. Nunc sed fringilla mi, eget viverra erat. Nam non ex erat. Donec eu odio eget tellus viverra cursus. Pellentesque blandit ullamcorper eros et porta. Sed non nisl consequat, sagittis sem et, eleifend eros. ",
      image: batat,
    },
    {
      name: "Hokkaido tikve",
      price: "5 kn/kg",
      about:
        "Sed eu turpis ac massa fringilla facilisis a ut enim. Ut id lacus congue, posuere enim id, efficitur quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus ",
      image: corn,
    },
    {
      name: "Jaja",
      price: "5 kn/kg",
      about:
        "Sed interdum mattis dictum. Proin sed leo a nibh pretium laoreet. In eget ex pretium, sodales dui sed, volutpat nisi. Vivamus vitae hendrerit purus, at pretium turpis. Curabitur nec volutpat justo. Etiam euismod, dolor quis blandit ullamcorper, tortor felis volutpat sem, in convallis tortor lectus ut metus. ",
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
