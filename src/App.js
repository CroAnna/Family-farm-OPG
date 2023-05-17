import { Fragment } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import Proizvodi from "./Components/FavProducts";
import Coverphoto from "./Components/Coverphoto";
import Gallery from "./Components/ImageSlider";
import Recipes from "./Components/AllProducts";
import RecipeInfo from "./Components/ProductInfo";
import { Route, Routes } from "react-router-dom";
import Dodatno from "./Components/Video";
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
        <Route path="/proizvodi/:id" element={<RecipeInfo />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
