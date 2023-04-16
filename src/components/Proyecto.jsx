import React from "react";
import styles from "../styles/Proyectos.module.css";
import git from "../img/github.png";
import deployment from "../img/deployment.png";

const Proyecto = ({ proyecto }) => {
  
  return (
    <article className={styles.proyecto}>
      <h2 className={styles.title}>{proyecto.nombre}</h2>
      <div className={styles.cardContain}>
        <div className={styles.fotoContain}>
          <img
            className={styles.imagen}
            src={proyecto.imagen}
            alt={proyecto.nombre}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.resumen}>
            <span>Descripción:</span>{" "}
          </p>
          {proyecto.descripcion.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}

          <p className={styles.resumen}>
            <span>Tecnologías:</span>
          </p>
          {proyecto.tecnologias.map((tec, index) => (
            <p key={index} style={{ display: "inline", paddingRight:'15px' }}>{tec}{index === proyecto.tecnologias.length-1 ? '.' : ', '}  </p>
          ))}

          <p className={styles.resumen}>
            <span>Librerías:</span>
          </p>
          {proyecto.librerias.map((lib, index) => (
            <p key={ index } style={{ display: "inline", paddingRight:'8px'}}>{lib} {index === proyecto.librerias.length-1 ? '.' : ', '} </p>
          ))}

          <div className={styles.rrssContain}>
            {proyecto.url.urlBackGit !== "" && (
              <>
                <p>
                  <span>Backend: </span>
                </p>
                <a href={proyecto.url.urlBackGit} target="_blank">
                  <img className={styles.rrss} src={git} alt="github" />
                </a>
              </>
            )}
          </div>
          <div className={styles.rrssContain}>
            <p>
              <span>FrontEnd: </span>
            </p>
            <a href={proyecto.url.urlFrontGit} target="_blank">
              <img className={styles.rrss} src={git} alt="github" />
            </a>
            <a href={proyecto.url.urlDeploy} target="_blank">
              <img className={styles.rrss} src={deployment} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Proyecto;
