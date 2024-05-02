import { itemsSection8 } from "../../../utils/consts";
// import TexBoxSection7 from "../../texBoxSection7/texBoxSection7";
// import itemsSection7 from  "../../../utils/consts";
import { TextBoxSection8 } from "../../textBoxSection8/textBoxSection8";
import s from "./section7.module.scss";

export default function Section7() {
  return (
    <section className={s.container} id="section8">
      <h3>
        A Curriculum Built Upon <br /> Award-Winning Research
      </h3>
      {/* <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
        quasi nemo aliquam. Quis fugiat similique nemo in, cumque iste deserunt
        modi neque repellendus unde reprehenderit. Nesciunt delectus non
        assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Saepe explicabo eum, natus ipsam distinctio nesciunt praesentium eveniet
        ratione animi nisi pariatur omnis tempore veritatis iure sunt placeat
        minus nobis dolor.
      </p> */}
      {/* <TexBoxSection7
        title="What You Leave ?"
        listLeft={itemsSection7}
        listRight={itemsSection7}
      /> */}
      <TextBoxSection8 items={itemsSection8} />
    </section>
  );
}
