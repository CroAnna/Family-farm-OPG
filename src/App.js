import { Fragment } from "react";
import "./App.scss";
import FavProducts from "./Components/FavProducts";
import Coverphoto from "./Components/Coverphoto";
import AllProducts from "./Components/AllProducts";
import ProductInfo from "./Components/ProductInfo";
import { Route, Routes } from "react-router-dom";
import Video from "./Components/Video";
import Layout from "./Layout";
import About from "./Components/About";

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
            </Fragment>
          }
        ></Route>
        <Route path="/proizvodi" element={<AllProducts />}></Route>
        <Route path="/onama" element={<About />}></Route>
        <Route path="/proizvodi/:id" element={<ProductInfo />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
