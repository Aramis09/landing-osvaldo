import s from "./itemSection5.module.scss";

interface Props {
  text: string;
  image: string;
}

export default function ItemSection5({ text, image }: Props) {
  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <img loading="lazy" src={image} alt="background" />
      </div>
      <p>{text}</p>
    </div>
  );
}
