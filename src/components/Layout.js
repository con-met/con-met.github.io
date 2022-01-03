import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header hero={false}></Header>

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
