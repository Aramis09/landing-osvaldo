import s from "./whiteCard.module.scss";
interface Props {
  title: string;
}

export default function CardTarjet({ title }: Props) {
  return <div className={s.container}>{title}</div>;
}
