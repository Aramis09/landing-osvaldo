import s from "./section8.module.scss";

import { itemsSection8 } from "../../../utils/consts";
import { TextBoxSection8 } from "../../textBoxSection8/textBoxSection8";

export default function Section8() {
  return (
    <section className={s.container} id="section8">
      <TextBoxSection8 items={itemsSection8} />
    </section>
  );
}
