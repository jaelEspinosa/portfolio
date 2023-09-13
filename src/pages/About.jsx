import React from "react";
import styles from '../styles/About.module.css'
import foto from '../img/fotosiluetaok.jpg'

const About = () => {
  return (
    <div className={styles.contain}>
    {/* <figure className={styles.containFoto}>
      <img className={styles.foto} src={foto} alt='foto-perfil'/>
    </figure> */}
<article id="blur"  className={styles.containArticle}>
<h2>Acerca de mí.</h2>
    <figure className={styles.containFoto}>
      <img className={styles.foto} src={foto} alt='foto-perfil'/>
    </figure>
    <p>
      Mi nombre es José Antonio Espinosa Lucia, nací en Madrid y actualmente vivo en la provincia de Cádiz.
    </p>
    <p>
      Mi carrera profesional comenzó al terminar  Bachillerato, en el sector de las artes gráficas,
      pasando por imprenta, fotomecánica (hoy dia diseño gráfico), y encuadernación. 
      
    </p>
    <p>
      Mi primer cambio de rumbo fue 2004 cuando decidí hacer un curso de sistemas microinformáticos. Y posteriormente
      otro de administración de redes.
      A partir de ahí comencé como técnico en Pc City, dando servicio postventa, reparando y configurando
      ordenadores.
     
    </p>
    <p> Esta experiencia laboral, me enseñó la importancia de la comunicación y el trabajo en equipo.</p>
    <p>
      Después de esta etapa, pasé a fomar parte de Phone House, como asesor al cliente en servicios 
      de telefonía, internet, tv y energía. En esta etapa además de fortalecer la comunicación y el trabajo en equipo, aprendí
      a ser proactivo. Con el lema 'Para obtener resultados diferentes, haz cosas diferentes'
    </p>

    <p>
       Ahora en la actualidad, con un nuevo giro, he cursado un BootCamp FullStack Web Developer. Ha sido un curso inmersivo que ha durado 4 meses en el que he aprendido
      tecnologías como HTML5, CSS3 (Preprocesadores SCSS y SASS), JAVASCRIPT, REACT, ANGULAR, PHP, NODEJS y MONGODB.  

    </p>

    {/* <p>
      Entre mis aficiones están los videojuegos y el deporte, me encanta darle 'caña' a la play. Además de salir a correr e ir al gimnasio a 'levantar pesas' 
    </p> */}
</article>
      
    </div>
  );
};

export default About;
