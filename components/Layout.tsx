import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
