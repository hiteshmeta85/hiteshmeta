import React, { ReactElement } from "react";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Nav from "./Nav/Nav";
import Mail from "./Nav/Mail";
import MobileNav from "./Nav/MobileNav";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>hiteshmeta</title>
      </Head>
      <div className="bg-white dark:bg-[#18181b]">
        <Nav />
        <Mail />
        <MobileNav />
        <div className="no-scrollbar-visible container relative min-h-[100vh] pb-20">
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
      </div>
    </>
  );
};

export default Layout;
