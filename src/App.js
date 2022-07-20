import { useState } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Proizvodi from "./Components/Proizvodi";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />
      <Proizvodi />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
