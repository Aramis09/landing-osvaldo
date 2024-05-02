import { itemsSection5 } from "../../../utils/consts";
import ItemSection5 from "../../itemSection5/itemSection5";
import s from "./section5.module.scss";

export default function Section5() {
  return (
    <section className={s.container} id="section5">
      <h3>Is WelloryX Right for you ?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate quos autem pariatur iure perspiciatis illo ex quis doloremque
        at repellat consequuntur quod nulla temporibus quisquam labore eligendi,
        quo placeat!
      </p>
      <div className={s.containerItems}>
        {itemsSection5.map((item) => (
          <ItemSection5 text={item.text} image={item.img} />
        ))}
      </div>
    </section>
  );
}
