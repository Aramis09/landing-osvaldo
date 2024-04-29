import s from "./section8.module.scss";

import { itemsSection8 } from "../../../utils/consts";
import { ItemBenefit } from "../../itemBenefit/itemBenefit";

export default function Section8() {
  return (
    <div className={s.container}>
      <ItemBenefit items={itemsSection8} />
    </div>
  );
}
