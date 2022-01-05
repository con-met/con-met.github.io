import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ hero = true, children }) => {
  return (
    <div>
      <Header hero={true}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
