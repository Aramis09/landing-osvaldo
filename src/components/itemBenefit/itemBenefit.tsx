import checkIcon from "../../assets/icons/check.svg";
import ButtonGreen from "../buttonGreen/buttonGreen";
import s from "./itemBenefit.module.scss";

interface Props {
  items: { text: string; bonus: boolean }[];
}
export const ItemBenefit = ({ items }: Props) => {
  return (
    <div className={s.container}>
      <h3>Promocion!</h3>
      <label> DESCUENTO 30% !!</label>
      <div className={s.containerItems}>
        {items.map((item) => (
          <div className={s.item}>
            <img src={checkIcon} alt="checkIcon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <span></span>
      <div className={s.containerPrice}>
        <p>Total tution Saving</p>
        <p>$997.99</p>
      </div>
      <ButtonGreen title="Obtener Promocion!" />
    </div>
  );
};
