import React from "react";
import curriculum from "../img/cv_jose_antonio_espinosa.jpg"
import styles from '../styles/Curriculum.module.css'

const Curriculum = () => {
  return (
    <div className={styles.contain}>
      <img className ={styles.cv} src={curriculum} alt="curriculum" />
    </div>
  );
};

export default Curriculum;
