import { useState } from "react";
import "./App.scss";
import Header from "./Components/Header";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="App">
      <Header openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}

export default App;
