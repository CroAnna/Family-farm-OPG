import { useState } from "react";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Proizvodi from "./Components/Proizvodi";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />

      <Proizvodi />
      <Footer />
    </div>
  );
}

export default App;
