import React, { ReactElement } from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className={"container relative min-h-[100vh] pb-20"}>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;