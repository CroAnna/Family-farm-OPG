import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Proizvodi from "./Components/Proizvodi";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />

      <Proizvodi />
    </div>
  );
}

export default App;
