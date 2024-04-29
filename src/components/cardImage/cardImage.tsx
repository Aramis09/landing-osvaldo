import s from "./cardImage.module.scss";

interface Props {
  text: string;
  image: string;
}

export default function CardImage({ text, image }: Props) {
  return (
    <div className={s.container}>
      <div className={s.containerImg}>
        <img src={image} alt="background" />
      </div>
      <p>{text}</p>
    </div>
  );
}
