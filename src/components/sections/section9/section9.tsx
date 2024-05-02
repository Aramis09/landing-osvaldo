import { useEffect } from "react";
import { itemsPrice } from "../../../utils/consts";
import ItemSection9 from "../../itemSection9/itemSection9";
import s from "./section9.module.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
// register Swiper custom elements
export default function Section9() {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow", // Cambiado a 'coverflow'
      direction: "horizontal",
      loop: true,
      autoplay: true,
      centeredSlides: true, // Slide central alineado
      slidesPerView: 2, // Ajustar automáticamente el número de slides por vista
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
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
    <div className={s.container} id="section9">
      <h3>Save up to 60%</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem
        pariatur non atque provident exercitationem molestias nostrum
      </p>
      <div className="swiper">
        <div className="swiper-wrapper">
          {itemsPrice.map((item) => (
            <div className="swiper-slide">
              <ItemSection9 price={item.price} frecuency={item.frecuency} />
            </div>
          ))}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <p style={{ textAlign: "left" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        molestias enim, beatae exercitationem natus illum cupiditate, velit in
        consectetur impedit saepe reprehenderit a laudantium nihil quos officia
        dicta unde modi.
      </p>
    </div>
  );
}
