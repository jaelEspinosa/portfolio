import React from "react";
import styles from "../styles/Home.module.css";
//import foto from "../img/foto_transparente_ruido.png";
//import foto from "../img/logoJael2_transp_blanco.png";
import foto from "../img/logoJaelEspinosa2_transp.png";
import Tecnologies from "../components/Tecnologies";



const Home = () => {
  return (
    <>
   
    <div id="blur" className={styles.container}>
      <h2>¡Hola, bienvenido!</h2>
      
      <div className={styles.contfoto}>
        <img className={styles.foto} src={foto} alt="logo-perfil"></img>
        
      </div>
        
      
      <h2>A mi PortFolio</h2>
    </div>
    <div className={styles.tecnologies}>
    
    <Tecnologies />
    </div>
    </>
  );
};

export default Home;
