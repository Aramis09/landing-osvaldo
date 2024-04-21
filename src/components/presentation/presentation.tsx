import s from "./presentation.module.scss";
import ButtonGreen from "../buttonGreen/buttonGreen";

export default function Presentation() {
  return (
    <div className={s.container}>
      <h1>
        Become a Certified <br /> Nutrion Coach
      </h1>
      <p>
        Whether you want to start your own business, land a job, or crete a
        healthier home, we-ll help you build the future you want, doing what you
        love
      </p>
      <ButtonGreen title="Enroll Now" />
    </div>
  );
}
