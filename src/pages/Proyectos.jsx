import React from "react";
import styles from "../styles/Proyectos.module.css";
import git from "../img/github.png";
import deployment from "../img/deployment.png";
import weather from "../img/weather.jpg";
import guitarLa from "../img/guitarLa.jpg";
import quiosco from "../img/quiosco.jpg";
import uptask from "../img/upTask.jpg";
import productHunt from "../img/productHunt.jpg";

const Proyectos = () => {
  return (


    
    <div className={styles.contain}>
    <article className={styles.proyecto}>
    <h2 className={styles.title}>Product-Hunt-clon</h2>
        <div className={styles.cardContain}>
          <div className={styles.fotoContain}>
            <img className={styles.imagen} src={productHunt} alt="weather-app" />
          </div>
          <div className={styles.description}>
            <p className={styles.resumen}>
             <span>Descripción: </span></p>
             <p>Aplicación web en la que puedes publicar tus proyectos o productos. Los usuarios registrados podrán votar y comentar dichos proyectos.</p>
              
          
            <p className={styles.resumen}><span>Tecnologías:</span></p>
            <p>NEXT y FIREBASE</p> 
            <p className={styles.resumen}><span>Librerias:</span></p>
            <p>@emotion styled components</p>
            <div className={styles.rrssContain}>
            <a
                href="https://github.com/jaelEspinosa/ProductHunt.git"
                target="_blank"
              >
                <img className={styles.rrss} src={git} alt="github" />
              </a>
              <a href="https://product-hunt-flame.vercel.app/" target="_blank">
                <img className={styles.rrss} src={deployment} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </article>

     
      <article className={styles.proyecto}>
        <h2 className={styles.title}>GuitarLa</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={guitarLa} alt="guitarLa-app" />
          <div className={styles.description}>
            <p className={styles.resumen}></p>
            <span>Descripción:</span>
            <p>Emulación Ecommerce. Se trata de una tienda de guitarras y cursos
                         de guitarra.</p>
            
            <p className={styles.resumen}><span>Tecnologías:</span></p>
            <p>NEXTJS, CSS </p>
            <p className={styles.resumen}><span>Backend:</span></p>
            <p>STRAPI</p>
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
            <p className={styles.resumen}><span>Descripción:</span></p>
            <p>Aplicación de quiosco para cafeteria. Es una app para gestionar
              pedidos de bebida o comida.</p>
            <p className={styles.resumen}><span>Tecnología:</span></p>
            <p>NEXTJS</p>
            <p className={styles.resumen}><span>Librerías:</span></p>
            <p>Toastify, React-Modal, Prisma y Tailwind</p>
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
            <p className={styles.resumen}><span>Descripción:</span> </p>
            <p> Crea y gestiona proyectos y tareas. El administrador o creador del proyecto
                 puede añadir modificar dichas tareas así como añadir colaboradores, éstos últimos
                 sólo podrán ver y completar dichas tareas, quedando reservada la opción de edición 
                 al administrador del proyecto</p> 
            
            
            <p className={styles.resumen}><span>Tecnologías:</span></p>
            <p>REACT, CSS, NODEJS</p>  
            <p className={styles.resumen}>
            <span>Librerías:</span></p>
            <p>React-Router-Dom, Axios, Tailwind, Express, Nodemailer, Mongoose y SocketIo.</p> 
            <div className={styles.resumen}>
            <div className={styles.rrssContain}>
            <p><span>Backend</span></p> 
              <a
                href="https://github.com/jaelEspinosa/uptask_backend.git"
                target="_blank"
              >
             <img className={styles.rrss} src={git} alt="github" /> 
              </a>
            </div>
            
            </div>
            
            <div className={styles.rrssContain}>
            <p><span>Frontend</span></p>
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
             <span>Descripción: </span></p>
             <p>App meteorológica. Si das permisos de ubicación, consulta a la api
              wheather y renderiza la predicción meteorológica en las horas y
              dias próximos. También tiene un buscador para encontrar la ciudad
              deseada y consultar el clima de ésta.</p>
              
          
            <p className={styles.resumen}><span>Tecnologías:</span></p>
            <p>REACT, CSS</p> 
            <p className={styles.resumen}><span>Librerias:</span></p>
            <p>React-Router-Dom, Axios</p>
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
      
    </div>
  );
};

export default Proyectos;
