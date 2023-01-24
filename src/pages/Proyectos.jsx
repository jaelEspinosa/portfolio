import Proyecto from "../components/Proyecto";
import { proyectos } from "../data/proyectos";
import styles from "../styles/Proyectos.module.css";

const Proyectos = () => {

  return (
    <div className={styles.contain}>
    <h1 style={{textDecoration:'underline'}}>Proyectos</h1>
     {proyectos.map (proyecto => (
        <Proyecto key={proyecto.id} proyecto = { proyecto }/>
     ))}
     <article>
        <h1>Más proyectos en Angular y Js en el enlace a mi GitHub más abajo</h1>
      </article>
    </div>
  )
}

export default Proyectos