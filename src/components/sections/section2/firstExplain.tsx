import s from "./firstExplain.module.scss";
import imagehand from "../../../assets/background/phone-hand.png";
import { itemsSection2 } from "../../../utils/consts";
import ItemBackground from "../../itemBackground/itemBackground";
import ButtonGreen from "../../buttonGreen/buttonGreen";

export default function FirstExplain() {
  return (
    <section className={s.container}>
      <div className={s.containerData}>
        <h2>
          Accede rápidamente al historial clínico completo de cada cliente !
        </h2>
        <p>
          Incluyendo información detallada sobre sus hábitos alimenticios,
          antecedentes médicos y progreso a lo largo del tiempo.
        </p>

        {itemsSection2.map((item) => (
          <ItemBackground title={item.text} />
        ))}
        <ButtonGreen title="Ver mas  !" />
      </div>
      <img className={s.handPhoneImg} src={imagehand} alt="hand-phone-image" />
    </section>
  );
}
