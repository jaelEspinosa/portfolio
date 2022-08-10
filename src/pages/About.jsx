import React from "react";
import styles from '../styles/About.module.css'
import foto from '../img/fotosiluetaok.jpg'

const About = () => {
  return (
    <div className={styles.contain}>
    <figure className={styles.containFoto}>
      <img className={styles.foto} src={foto} alt='foto-perfil'/>
    </figure>
<article>
<h2>Acerca de mí.</h2>
    
    <p>
      Mi nombre es José Antonio Espinosa Lucia, nací en Madrid y actualmente vivo en la provincia de Cádiz.
    </p>
    <p>
      Mi carrera profesional comenzó muy pronto, nada mas terminar el Bachillerato. Los primeros años fueron en el sector de las artes gráficas,
      pasando por imprenta, fotomecánica (hoy dia diseño gráfico), y encuadernación. 
      
    </p>
    <p>
      Mi primer cambio de rumbo fue 2004 cuando decidí hacer un curso de sistemas microinformáticos, ya que desde pequeño siempre me gustó el mundo
      de la tecnología y muy en particular los ordenadores. A partir de aqui comencé como técnico en Pc City, dando servicio postventa, reparando y configurando
      ordenadores a nuestros clientes. 
      A finales de 2005 decidí hacer un nuevo curso, en este caso administración de redes, para ampliar los conocimientos que ya habia adquirido en el curso anterior.
    </p>
    <p>
      Después de esta etapa, pasé a fomar parte de Phone House, como asesor al cliente en servicios 
      de telefonía, internet, tv y energía. Fueron casi 10 años enfocado al cliente y a la venta por 
      objetivos.
    </p>

    <p>
      Y ahora en actualidad, con un nuevo giro, he cursado un BootCamp FullStack Web Developer. Ha sido un curso intensivo que ha durado 4 meses en el que he aprendido
      tecnologías como HTML5, CSS3 (Preprocesadores SCSS y SASS), JavaScript, React, Angular, PHP, NodeJs y MongoDB.  

    </p>

    <p>
      Entre mis aficiones están los videojuegos y el deporte, me encanta darle 'caña' a la play. Además de salir a correr e ir al gimnasio a 'levantar pesas' 
    </p>
</article>
      
    </div>
  );
};

export default About;
