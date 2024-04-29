import { itemsPrice } from "../../../utils/consts";
import ItemPrice from "../../itemPrice/itemPrice";
import s from "./section9.module.scss";

export default function Section9() {
  return (
    <div className={s.container}>
      <h3>Save up to 60%</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem
        pariatur non atque provident exercitationem molestias nostrum
      </p>
      <div className={s.containerItems}>
        {itemsPrice.map((item) => (
          <ItemPrice price={item.price} frecuency={item.frecuency} />
        ))}
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
