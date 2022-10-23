import React, { ReactElement } from "react";
import Footer from "./Footer";
import Nav from "./Nav/Nav";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Nav/>
      <div className={"container relative min-h-[100vh] pb-20"}>
        {children}
        <Footer/>
      </div>
    </>
  );
};

export default Layout;