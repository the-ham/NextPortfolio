import type { NextPage } from "next";
import Image from "next/image";
import portrait from "../public/static/portrait.png";

const Home: NextPage = () => {
  return (
    <>
      <Image src={portrait} alt="portrait" height={1000} quality={100} className="absolute bottom-0 -mb-[68px] mx-36"/>
    </>
  );
};

export default Home;
