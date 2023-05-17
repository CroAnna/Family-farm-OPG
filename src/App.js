import { Fragment } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import Proizvodi from "./Components/Proizvodi";
import Coverphoto from "./Components/Coverphoto";
import Gallery from "./Components/Gallery";
import Recipes from "./Components/Recipes";
import RecipeInfo from "./Components/RecipeInfo";
import { Route, Routes } from "react-router-dom";
import Dodatno from "./Components/Dodatno";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
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
        <Route path="/proizvodi" element={<Recipes />}></Route>
        <Route path="/proizvodi/:name" element={<RecipeInfo />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
