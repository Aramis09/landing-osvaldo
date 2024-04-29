import s from "./presentation.module.scss";
import ButtonGreen from "../../buttonGreen/buttonGreen";

export default function Presentation() {
  return (
    <section className={s.container}>
      <div className={s.blur}></div>
      <h1>
        Optimiza tu práctica nutricional !<br />{" "}
        <b>con nuestro Sistema Integral de Gestión</b>
      </h1>
      <p>
        Nuestra plataforma te ofrece todas las herramientas necesarias para
        simplificar la gestión de tus pacientes, agilizar tus procesos y mejorar
        la atención que brindas.
      </p>
      <ButtonGreen title="Comienza ahora !" />
    </section>
  );
}
