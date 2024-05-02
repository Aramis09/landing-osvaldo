import s from "./section6.module.scss";
import imagePatient from "../../../assets/images/paciente.jpg";

export default function Section6() {
  return (
    <section className={s.container} id="section6">
      <div className={s.containerData}>
        <h3>Sobre nosotros</h3>
        <p>
          De nutriólogo a nutriólogo, comprendemos la complejidad de tu trabajo
          y los obstáculos que enfrentas en la gestión diaria de tu consulta.
          Por eso, desarrollamos este software con el propósito de facilitar tus
          procesos, optimizando la organización de citas, expedientes y
          seguimiento de pacientes.
        </p>
        <p>
          Nuestro objetivo es brindarte una herramienta integral que no solo
          simplifique tu carga de trabajo, sino que también mejore la calidad de
          atención que puedes ofrecer. Estamos comprometidos a ser tu software
          confiable en el camino hacia una práctica más eficiente y exitosa.
        </p>
        {/* <a href="">Ir a ver mas...</a> */}
      </div>
      <div className={s.containerImage}>
        <img loading="lazy" src={imagePatient} alt="paciente feliz" />
      </div>
    </section>
  );
}
