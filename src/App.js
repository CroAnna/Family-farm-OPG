import { useState } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Proizvodi from "./Components/Proizvodi";
import Gallery from "./Components/Gallery";

function App() {
  const [openNav, setOpenNav] = useState(false);

  // dodaj routes za galeriju i linkove na navbar
  // treba smanjit rezoluciju skoro svih slika

  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <Proizvodi />
      <Location />
      <Contact />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;
