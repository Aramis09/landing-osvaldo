import Presentation from "../components/sections/section1/presentation";
// import MiddleFooter from "../components/sections/middleFooter/middleFooter";
import FirstExplain from "../components/sections/section2/firstExplain";
import ViewCards from "../components/sections/section4/viewCards";
import Section3 from "../components/sections/section3/section3";
import ViewCardImages from "../components/sections/section5/viewCardImages";
import Section6 from "../components/sections/section6/section6";
import Section7 from "../components/sections/section7/section7";
import Section8 from "../components/sections/section8/section8";
import Section9 from "../components/sections/section9/section9";
import Section10 from "../components/sections/section10/section10";

export default function Landing() {
  return (
    <div style={{ width: "100%" }}>
      <Presentation />
      {/* <MiddleFooter /> */}
      <FirstExplain />
      <Section3 />
      <ViewCards />
      <ViewCardImages />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
}
