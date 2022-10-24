import React, { ReactElement } from "react";
import Footer from "./Footer";
import Nav from "./Nav/Nav";
import { Toaster } from "react-hot-toast";
import MobileNav from "./Nav/MobileNav";
import Mail from "./Nav/Mail";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Nav />
      <Mail />
      <MobileNav />
      <div
        className={
          "no-scrollbar-visible container relative min-h-[100vh] pb-20"
        }
      >
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            style: {
              background: "#27272a",
              color: "#e4e4e7",
            },
          }}
        />
      </div>
    </>
  );
};

export default Layout;
