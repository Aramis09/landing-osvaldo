import s from "./viewCards.module.scss";
import ButtonGreen from "../../buttonGreen/buttonGreen";
import { itemsWithBackground } from "../../../utils/consts";
import CardTarjet from "../../cardTarjet/whiteCard";

export default function ViewCards() {
  return (
    <section className={s.container}>
      <div className={s.containerItems}>
        {itemsWithBackground.slice(0, 3).map((item) => (
          <CardTarjet title={item.text} />
        ))}
      </div>
      <ButtonGreen title="Enroll Now" />
    </section>
  );
}
