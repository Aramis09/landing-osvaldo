import s from "./boxSection10.module.scss";
import ButtonGreen from "../buttonGreen/buttonGreen";

export default function BoxSection10() {
  return (
    <div className={s.container}>
      <p className={s.firstText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        suscipit, animi sequi ducimus assumenda <b>Ilimited</b>
      </p>
      <p className={s.secondText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim,
        nemo sapiente molestiae tempore architecto quos, explicabo nam tenetur
      </p>
      <ButtonGreen title="Enroll Now" />
    </div>
  );
}
