import s from "./section3.module.scss";
import imageStonks from "../../../assets/images/stonks-short.jpg";
import ButtonGreen from "../../buttonGreen/buttonGreen";

export default function Section3() {
  return (
    <div className={s.container}>
      <div className={s.containerData}>
        <h2>Utiliza nuestra tecnología para potenciar tus consultas</h2>
        <p>
          Simplifica tus procesos administrativos,{" "}
          <b>optimiza tu tiempo y maximiza tus ingresos</b> con nuestra
          plataforma innovadora.
        </p>
        <p>
          Al automatizar tareas como la programación de citas y la documentación
          de historiales clínicos, liberarás tiempo valioso para atender a más
          pacientes y expandir tus servicios.
        </p>
        <p>
          Nuestra herramienta de generación de dietas personalizadas te
          permitirá ofrecer servicios premium y diferenciarte en el mercado, lo
          que significa tarifas más altas por consulta y una{" "}
          <b>mayor demanda de tus servicios</b>.
        </p>
        <ButtonGreen title="Empezar ahora!" />
      </div>

      <div className={s.containerImage}>
        <img src={imageStonks} alt="stonks" />
      </div>
    </div>
  );
}
