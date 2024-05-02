import s from "./section1.module.scss";
import ButtonGreen from "../../buttonGreen/buttonGreen";

export default function Section1() {
  return (
    <section className={s.container} id="section1">
      <div className={s.blur}></div>
      <h1>
        Optimiza tu práctica nutricional
        <br /> <b>con nuestro Sistema Integral de Gestión</b>
      </h1>
      <p>
        Nuestra plataforma te ofrece todas las herramientas necesarias para
        simplificar la gestión de tus pacientes, agilizar tus procesos y mejorar
        la atención que brindas.
      </p>
      <ButtonGreen title="Comienza ahora" />
    </section>
  );
}
