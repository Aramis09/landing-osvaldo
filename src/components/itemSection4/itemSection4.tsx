import s from "./itemSection4.module.scss";
interface Props {
  title: string;
}

export default function ItemSection4({ title }: Props) {
  return <div className={s.container}>{title}</div>;
}
