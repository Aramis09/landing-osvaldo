import Section1 from "../components/sections/section1/section1";
// import MiddleFooter from "../components/sections/middleFooter/middleFooter";
import Section2 from "../components/sections/section2/section2";
// import Section4 from "../components/sections/section4/section4";
import Section3 from "../components/sections/section3/section3";
// import Section5 from "../components/sections/section5/section5";
import Section6 from "../components/sections/section6/section6";
import Section7 from "../components/sections/section7/section7";
// import Section8 from "../components/sections/section8/section8";
// import Section9 from "../components/sections/section9/section9";
import Section10 from "../components/sections/section10/section10";
import burgerIcon from "../assets/icons/burguer.svg";
import crossIcon from "../assets/icons/cross.svg";
import s from "./landing.module.scss";
import { useState } from "react";
import Navbar from "../components/navbar/navbar";

export default function Landing() {
  const [showNavbar, setShowNavbar] = useState(false);
  console.log(showNavbar);

  return (
    <div className={s.container}>
      <img
        loading="lazy"
        src={showNavbar ? crossIcon : burgerIcon}
        alt="menu"
        className={s.menuIcon}
        style={{
          display: window.innerWidth < 1025 ? "block" : "none",
          zIndex: "200",
        }}
        onClick={() => setShowNavbar(!showNavbar)}
      />
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Section1 />
      {/* <MiddleFooter /> */}
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      {/* <Section8 /> */}
      {/* <Section9 /> */}
      <Section10 />
    </div>
  );
}
