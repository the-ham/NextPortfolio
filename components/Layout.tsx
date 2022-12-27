import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <div className="h-full relative">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
