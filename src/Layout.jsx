import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <main>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
