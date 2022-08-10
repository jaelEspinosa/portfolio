import React from "react";
import styles from "../styles/Proyectos.module.css";
import thrones from "../img/gameOfThrones.jpg";
import git from "../img/github.png";
import deployment from "../img/deployment.png";
import weather from "../img/weather.jpg";
import guitarLa from "../img/guitarLa.jpg";
import quiosco from "../img/quiosco.jpg";
import uptask from "../img/upTask.jpg";

const Proyectos = () => {
  return (
    <div className={styles.contain}>
      <article className={styles.proyecto}>
        <h2 className={styles.title}>GuitarLa</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={guitarLa} alt="guitarLa-app" />
          <div className={styles.description}>
            <p className={styles.resumen}>
            <span>Descripción:</span>
            <p>Emulación Ecommerce. Se trata de una tienda de guitarras y cursos
                         de guitarra.</p>
            </p>
            <p className={styles.resumen}><span>Tecnología:</span><p>NextJs css </p> </p>
            <p className={styles.resumen}><span>Backend:</span> <p>Strapi</p></p>
            <div className={styles.rrssContain}>
              <a
                href="https://github.com/jaelEspinosa/guitarla_next.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a href="https://guitarlajael.netlify.app/" target="_blank">
                <img className={styles.rrss} src={deployment} alt="github" />
               </a>
            </div>
          </div>
        </div>
      </article>
      <article className={styles.proyecto}>
        <h2 className={styles.title}>Quiosco App</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={quiosco} alt="guitarLa-app" />
          <div className={styles.description}>
            <p className={styles.resumen}>
            <span>Descripción:</span> 
            <p>
            Aplicación de quiosco para cafeteria. Es una app para gestionar
              pedidos de bebida o comida.
            </p>
            </p>
            <p className={styles.resumen}><span>Tecnología:</span> <p>NextJs</p></p>
            <p className={styles.resumen}>
            <span>Librerías:</span> <p>toastify, react-modal, Prisma y tailwind</p>
            </p>
            <div className={styles.rrssContain}>
              <a
                href="https://github.com/jaelEspinosa/Quioscoapp_nextJs.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a href="https://quiosco-app-deploy.vercel.app/" target="_blank">
                <img className={styles.rrss} src={deployment} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className={styles.proyecto}>
        <h2 className={styles.title}>UpTask Mern</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={uptask} alt="game-of-thrones" />
          <div className={styles.description}>
            <p className={styles.resumen}><span>Descripción:</span> 
            <p> Crea y gestiona proyectos y tareas. El administrador o creador del proyecto
                 puede añadir modificar dichas tareas así como añadir colaboradores, éstos últimos
                 sólo podrán ver y completar dichas tareas, quedando reservada la opción de edición 
                 al administrador del proyecto</p> 
            </p>
            <p></p>
            <p className={styles.resumen}><span>Tecnologías:</span><p>React, css, NodeJs</p>  </p>
            <p className={styles.resumen}>
            <span>Librerías:</span> <p>React-router-dom, axios, tailwind, Express, Nodemailer, Mongoose y socketIo.</p> 
            </p>
            <p className={styles.resumen}>
            <div className={styles.rrssContain}>
            <p>Backend</p> 
              <a
                href="https://github.com/jaelEspinosa/uptask_backend.git"
                target="_blank"
              >
             <img className={styles.rrss} src={git} alt="github" /> 
              </a>
            </div>
            
            </p>
            
            <div className={styles.rrssContain}>
            <p>Frontend</p>
              <a
                href="https://github.com/jaelEspinosa/uptasck_frontend.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a href="https://uptask-mern.netlify.app/" target="_blank">
                <img className={styles.rrss} src={deployment} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </article>
     

      <article className={styles.proyecto}>
        <h2 className={styles.title}>weather App</h2>
        <div className={styles.cardContain}>
          <div className={styles.fotoContain}>
            <img className={styles.imagen} src={weather} alt="weather-app" />
          </div>
          <div className={styles.description}>
            <p className={styles.resumen}>
             <span>Descripción: </span>
             <p>App meteorológica. Si das permisos de ubicación, consulta a la api
              wheather y renderiza la predicción meteorológica en las horas y
              dias próximos. También tiene un buscador para encontrar la ciudad
              deseada y consultar el clima de ésta.</p>
              
            </p>
            <p className={styles.resumen}><span>Tecnología:</span> <p>React css</p> </p>
            <p className={styles.resumen}><span>librerias:</span><p>React-router-dom, axios</p></p>
            <div className={styles.rrssContain}>
              <a
                href="https://github.com/jaelEspinosa/React_weather.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a href="https://react-weather-omega.vercel.app/" target="_blank">
                <img className={styles.rrss} src={deployment} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </article>

      <article>
        <h1>Más proyectos en Angular y Js en el enlace a mi GitHub más abajo</h1>
      </article>
      {/* <article className={styles.proyecto}>
        <h2 className={styles.title}>Game of Thrones</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={thrones} alt="game-of-thrones" />
          <div className={styles.description}>
            <p className={styles.resumen}>
              Web basada en la serie. Se puede consultar el nombre y casa de
              cada uno de los personajes de la serie.
            </p>
            <p>(Sólo vista Ordenador)</p>
            <p className={styles.resumen}>Tecnologia: React, scss </p>
            <p className={styles.resumen}>
              librerias: React-router-dom, axios,
              i18next-browser-languagedetector
            </p>
            <div className={styles.rrssContain}>
              <a
                href="https://github.com/jaelEspinosa/react_Games_of_Thrones.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a
                href="https://react-games-of-thrones.vercel.app/"
                target="_blank"
              >
                <img className={styles.rrss} src={deployment} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </article> */}
    </div>
  );
};

export default Proyectos;
