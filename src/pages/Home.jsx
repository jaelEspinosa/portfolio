import React from "react";
import styles from "../styles/Home.module.css";
import foto from "../img/foto_transparente_ruido.png";
import Teconolgies from "../components/Teconolgies";

const Home = () => {
  return (
    <>
   
    <div className={styles.container}>
      <h2>¡Hola soy Jose Antonio!</h2>
      <div className={styles.contfoto}>
        <img className={styles.foto} src={foto} alt="foto-perfil"></img>
      </div>
      <h2>Full Stack Dev</h2>
    </div>
    <div className={styles.tecnologies}>
    <Teconolgies />
     
    </div>
    </>
  );
};

export default Home;
