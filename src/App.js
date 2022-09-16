import { Fragment, useState } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Proizvodi from "./Components/Proizvodi";
import Coverphoto from "./Components/Coverphoto";
import Gallery from "./Components/Gallery";
import Recipes from "./Components/Recipes";
import RecipeInfo from "./Components/RecipeInfo";
import ScrollToTop from "./Components/ScrollToTop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dodatno from "./Components/Dodatno";

function App() {
  const [openNav, setOpenNav] = useState(false);
  const recepti = [
    {
      name: "Juha od butternut tikvi",
      image: require("./Images/recipes/butternut_juha.jpg"),
      category: "juha",
      ingredients:
        " 1 srednje velika butternut tikva, 1 glavica crvenog luka, 2-3 veća krumpira, 2 mrkve, ulje, sol, 1 žlica Vegete, origano, vrhnje za kuhanje",
      description:
        "Butternut tikvu prerezati uzdužno napola, velikom žlicom očistiti sredinu i odstraniti koru. Zatim ju narezati na kocke. Na zagrijanom ulju prodinstati sitno rezani crveni luk 3-4 minute. Nakon toga na luk dodati očišćenu i narezanu tikvu, krumpir i mrkvu narezanu na kocke. Dodati začine (sol, vegetu, prstohvat origana). Sve skupa dinstati 5-6 min i nakon toga sve zajedno prelijati vodom.  Kad je povrće skuhano skloniti ga s vatre i štapnim mikserom sve skupa izmiksati dok ne dobijemo željenu gustoću. Juhu vratiti na vatru, (ako je pregusta dodati malo vode), dodati oko 150 ml vrhnja za kuhanje i kuhati još 3 minute. Kad je gotovo skinuti s vatre i spremno je za posluživanje.",
    },
    {
      name: "Hokkaido palačinke",
      image: require("./Images/recipes/hokkaido_palacinke.jpg"),
      category: "desert",
      ingredients:
        " 150 g brašna, 150 g pirea od tikve, 1 čajna žličica soda bikarbone, 1 čajna žličica cimeta, prstohvat soli, 220 ml mlijeka, komadići čokolade",
      description:
        "Pomiješajte sastojke zajedno u zdjeli i ostavite da stoje 5 do 10 minnuta. Nakon toga ispecite palačinke na tavi s malo ulja (možete koristiti i kokosovo ulje).",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <ScrollToTop />
        <Header openNav={openNav} setOpenNav={setOpenNav} />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Fragment>
                <Coverphoto />
                <Proizvodi />
                <Dodatno />
                <Location />
                <Contact />
              </Fragment>
            }
          ></Route>
          <Route path="/galerija" element={<Gallery />}></Route>
          <Route
            path="/recepti"
            element={<Recipes recepti={recepti} />}
          ></Route>
          <Route
            path="/recept/:name"
            element={<RecipeInfo recepti={recepti} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
