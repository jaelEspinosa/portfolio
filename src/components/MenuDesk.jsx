import React from "react";
import styles from '../styles/MenuDesk.module.css'
import { Link } from 'react-router-dom'


const MenuDesk = () => {
  return (
    <nav>
      <ul className={styles.desk}>
        <Link to={'/'}><li className={styles.itemdesk}>Home</li></Link>
        <Link to={'/about'}><li className={styles.itemdesk}>Acerca de mi</li></Link>
        <Link to={'/curriculum'}><li className={styles.itemdesk}>Curriculum Vitae</li></Link> 
        <Link to={'/proyectos'}><li className={styles.itemdesk}>Proyectos</li></Link>
      </ul>
    </nav>
  );
};

export default MenuDesk;
  