import s from "./itemSection2.module.scss";
import checkIcon from "../../assets/icons/check.svg";

interface Props {
  title: string;
}

export default function ItemSection2({ title }: Props) {
  return (
    <div className={s.container}>
      <img loading="lazy" src={checkIcon} alt="check-Image" />
      {title}
    </div>
  );
}
