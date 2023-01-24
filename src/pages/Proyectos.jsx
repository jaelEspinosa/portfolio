import Proyecto from "../components/Proyecto";
import { proyectos } from "../data/proyectos";
import styles from "../styles/Proyectos.module.css";

const Proyectos = () => {

  return (
    <div className={styles.contain}>
    <h1>Proyectos</h1>
     {proyectos.map (proyecto => (
        <Proyecto key={proyecto.id} proyecto = { proyecto }/>
     ))}
    </div>
  )
}

export default Proyectos