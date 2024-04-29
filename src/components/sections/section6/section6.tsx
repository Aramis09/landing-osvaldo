import s from "./section6.module.scss";
import imagePatient from "../../../assets/images/paciente.jpg";

export default function Section6() {
  return (
    <div className={s.container}>
      <div className={s.containerData}>
        <h3>The Wellory Story</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ad
          iure officia nam voluptas sequi debitis quis dolore cupiditate maiores
          sapiente fuga soluta minus porro doloribus quaerat laudantium,
          repudiandae reprehenderit?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          at corporis vitae? Amet facere neque adipisci temporibus incidunt
          animi, voluptatibus, libero corrupti repellendus eos, quos qui
          expedita minus. Aspernatur, eaque?
        </p>
        <a href="">Ir a ver mas...</a>
      </div>
      <div className={s.containerImage}>
        <img src={imagePatient} alt="paciente feliz" />
      </div>
    </div>
  );
}
