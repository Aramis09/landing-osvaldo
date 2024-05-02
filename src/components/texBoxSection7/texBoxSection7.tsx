import s from "./texBoxSection7.module.scss";
import iconCheck from "../../assets/icons/check.svg";

interface Props {
  listLeft: { title: string; text: string }[];
  listRight: { title: string; text: string }[];
  title: string;
}

export default function TexBoxSection7({ title, listLeft, listRight }: Props) {
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <div className={s.containerLists}>
        <div className={s.list}>
          {listLeft.map((item) => (
            <div className={s.item}>
              <img loading="lazy" src={iconCheck} alt="check" />
              <div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={s.list}>
          {listRight.map((item) => (
            <div className={s.item}>
              <img loading="lazy" src={iconCheck} alt="check" />
              <div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
