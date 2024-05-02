import s from "./section4.module.scss";
import ButtonGreen from "../../buttonGreen/buttonGreen";
import { itemsWithBackground } from "../../../utils/consts";
import ItemSection4 from "../../itemSection4/itemSection4";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { useEffect } from "react";

export default function Section4() {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow", // Cambiado a 'coverflow'
      direction: "horizontal",
      loop: true,
      centeredSlides: true, // Slide central alineado
      slidesPerView: 3, // Ajustar automáticamente el número de slides por vista
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 130,
        modifier: 2,
      },
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    // return () => {
    //   swiper.destroy();
    // };
  }, []);
  return (
    <section className={s.container} id="section4">
      {/* <div className={s.containerItems}> */}
      <div className="swiper">
        <div className="swiper-wrapper">
          {itemsWithBackground.slice(0, 4).map((item) => (
            <div className="swiper-slide">
              <ItemSection4 title={item.text} />
            </div>
          ))}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      {/* </div> */}
      <ButtonGreen title="Enroll Now" />
    </section>
  );
}
