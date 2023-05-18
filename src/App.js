import { Fragment } from "react";
import "./App.scss";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import FavProducts from "./Components/FavProducts";
import Coverphoto from "./Components/Coverphoto";
import AllProducts from "./Components/AllProducts";
import ProductInfo from "./Components/ProductInfo";
import { Route, Routes } from "react-router-dom";
import Video from "./Components/Video";
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
              <FavProducts />
              <Video />
              <Location />
              <Contact />
            </Fragment>
          }
        ></Route>
        <Route path="/proizvodi" element={<AllProducts />}></Route>
        <Route path="/proizvodi/:id" element={<ProductInfo />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
