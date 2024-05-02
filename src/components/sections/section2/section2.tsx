import s from "./section2.module.scss";
import imagehand from "../../../assets/background/phone-hand1.png";
import { itemsSection2 } from "../../../utils/consts";
import ItemSection2 from "../../itemSection2/itemSection2";
import ButtonGreen from "../../buttonGreen/buttonGreen";

export default function Section2() {
  return (
    <section className={s.container} id="section2">
      <div className={s.containerData}>
        <h2>
          Accede rápidamente al historial clínico completo de cada cliente
        </h2>
        <p>
          Incluyendo información detallada sobre sus hábitos alimenticios,
          antecedentes médicos y progreso a lo largo del tiempo.
        </p>

        {itemsSection2.map((item) => (
          <ItemSection2 title={item.text} />
        ))}
        <ButtonGreen title="Ver mas" />
      </div>
      <img
        className={s.handPhoneImg}
        loading="lazy"
        src={imagehand}
        alt="hand-phone-image"
      />
    </section>
  );
}
