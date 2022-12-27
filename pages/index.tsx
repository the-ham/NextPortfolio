import type { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Footer/>
    </div>
  );
};

export default Home;
