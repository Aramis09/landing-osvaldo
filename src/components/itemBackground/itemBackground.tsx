import s from "./itemBackground.module.scss";
import checkIcon from "../../assets/icons/check.svg";

interface Props {
  title: string;
}

export default function ItemBackground({ title }: Props) {
  return (
    <div className={s.container}>
      <img src={checkIcon} alt="check-Image" />
      {title}
    </div>
  );
}
