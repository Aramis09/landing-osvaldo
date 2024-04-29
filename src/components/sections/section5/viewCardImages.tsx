import { itemsSection5 } from "../../../utils/consts";
import CardImage from "../../cardImage/cardImage";
import s from "./viewCardImages.module.scss";

export default function ViewCardImages() {
  return (
    <div className={s.container}>
      <h3>Is WelloryX Right for you ?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate quos autem pariatur iure perspiciatis illo ex quis doloremque
        at repellat consequuntur quod nulla temporibus quisquam labore eligendi,
        quo placeat!
      </p>
      <div className={s.containerItems}>
        {itemsSection5.map((item) => (
          <CardImage text={item.text} image={item.img} />
        ))}
      </div>
    </div>
  );
}
