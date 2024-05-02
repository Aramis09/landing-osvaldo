import s from "./itemSection9.module.scss";
import ButtonGreen from "../buttonGreen/buttonGreen";

interface Props {
  price: number;
  frecuency: string;
}

export default function ItemSection9({ price, frecuency }: Props) {
  return (
    <div className={s.container}>
      <p className={s.firstText}>No se que dice</p>
      <p>Lorem ipsum dolor sit </p>
      <p className={s.price}>
        <b>
          ${price} {"  "}
        </b>
        {frecuency}
        per month
      </p>
      <ButtonGreen title="Purchase" />
    </div>
  );
}
