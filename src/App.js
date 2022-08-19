import { Fragment, useState } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Location from "./Components/Location";
import Proizvodi from "./Components/Proizvodi";
import Coverphoto from "./Components/Coverphoto";

import Gallery from "./Components/Gallery";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header openNav={openNav} setOpenNav={setOpenNav} />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Fragment>
                <Coverphoto />
                <Proizvodi />
                <Location />
                <Contact />
              </Fragment>
            }
          ></Route>
          <Route path="/galerija" element={<Gallery />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
