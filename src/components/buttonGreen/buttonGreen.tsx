import s from "./buttonGreen.module.scss";

interface Params {
  title: string;
}

export default function ButtonGreen({ title }: Params) {
  return <button className={s.button}>{title}</button>;
}
