import checkIcon from "../../assets/icons/check.svg";
import ButtonGreen from "../buttonGreen/buttonGreen";
import s from "./textBoxSection8.module.scss";

interface Props {
  items: { text: string; bonus: boolean }[];
}
export const TextBoxSection8 = ({ items }: Props) => {
  return (
    <div className={s.container}>
      <h3>Promocion</h3>
      <label> DESCUENTO 30% !!</label>
      <div className={s.containerItems}>
        {items.map((item) => (
          <div className={s.item}>
            <img loading="lazy" src={checkIcon} alt="checkIcon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <span></span>
      <div className={s.containerPrice}>
        <p>Precio en promocion</p>
        <p>$000.00</p>
      </div>
      <ButtonGreen title="Obtener Promocion" />
    </div>
  );
};
