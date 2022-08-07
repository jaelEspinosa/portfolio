import React from "react";
import styles from "../styles/Proyectos.module.css";
import thrones from "../img/gameOfThrones.jpg";
import git from '../img/github.png'
import deployment from '../img/deployment.png'
import weather from '../img/weather.jpg'
import guitarLa from '../img/guitarLa.jpg'
import quiosco from '../img/quiosco.jpg'

const Proyectos = () => {
  return (
    <div className={styles.contain}>
      <article className={styles.proyecto}>
        <h2 className={styles.title}>Game of Thrones</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={thrones} alt="game-of-thrones" />
          <div className={styles.description}>
            <p className={styles.resumen}>
              Web basada en la serie. Se puede consultar el nombre y casa de
              cada uno de los personajes de la serie. 
            </p>
            <p className={styles.resumen}>Tecnologia: React scss </p>
            <p className={styles.resumen}>
              librerias: React-router-dom, axios,
              i18next-browser-languagedetector
            </p>
            <div className={styles.rrssContain}>
               <a href="https://github.com/jaelEspinosa/react_Games_of_Thrones.git" target='_blank'><img className={styles.rrss}src={git} alt='github'/></a> 
               <a href='https://react-games-of-thrones.vercel.app/' target='_blank'><img className={styles.rrss}src={deployment} alt='github'/></a>  
            </div>
          </div>
        </div>
      </article>

      <article className={styles.proyecto}>
        <h2 className={styles.title}>weather App</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={weather} alt="weather-app" />
          <div className={styles.description}>
            <p className={styles.resumen}>
              App meterológica. Si das permisos de ubicación, consulta a la api wheather y renderiza al prediccion meterológica en las hora y dias próximos.
              También tiene un buscador para encontrar la ciudad deseada y consultar el clima de ésta.
            </p>
            <p className={styles.resumen}>Tecnologia: React css </p>
            <p className={styles.resumen}>
              librerias: React-router-dom, axios
              
            </p>
            <div className={styles.rrssContain}>
               <a href="https://github.com/jaelEspinosa/React_weather.git" target='_blank'><img className={styles.rrss}src={git} alt='github'/></a> 
               <a href='https://react-weather-omega.vercel.app/' target='_blank'><img className={styles.rrss}src={deployment} alt='github'/></a>  
            </div>
          </div>
        </div>
        
      </article>
      <article className={styles.proyecto}>
        <h2 className={styles.title}>GuitarLa</h2>
        <div className={styles.cardContain}>
          <img className={styles.imagen} src={guitarLa} alt="guitarLa-app" />
          <div className={styles.description}>
            <p className={styles.resumen}>
              Emulación Ecommerce. Se trata de una tienda de guitarras y cursos de guitarra.
            </p>
            <p className={styles.resumen}>Tecnologia: NextJs css </p>
            <p className={styles.resumen}>
              
              
            </p>
            <div className={styles.rrssContain}>
               <a href="https://github.com/jaelEspinosa/guitarla_next.git" target='_blank'><img className={styles.rrss}src={git} alt='github'/></a> 
               <a href='https://guitarla-next-8xn4tf8cx-jaelespinosa.vercel.app/' target='_blank'><img className={styles.rrss}src={deployment} alt='github'/></a>  
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
              Aplicación de quiosco para cafeteria. Es una app para gestionar pedidos de bebida o comida.
            </p>
            <p className={styles.resumen}>Tecnologia: NextJs, Prisma tailwind </p>
            <p className={styles.resumen}>libreias: toastify, react-modal
              
              
            </p>
            <div className={styles.rrssContain}>
               <a href="https://github.com/jaelEspinosa/Quioscoapp_nextJs.git" target='_blank'><img className={styles.rrss}src={git} alt='github'/></a> 
               <a href='https://quiosco-app-deploy.vercel.app/' target='_blank'><img className={styles.rrss}src={deployment} alt='github'/></a>  
            </div>
          </div>
        </div>
        
      </article>


    </div>
  );
};

export default Proyectos;
