import React from "react";
import styles from '../styles/MenuDesk.module.css'
import { Link, useLocation } from 'react-router-dom'


const MenuDesk = () => {
  const location = useLocation()
  
  return (
    <nav>
      <ul className={styles.desk}>
        <Link to={'/'} ><li style={{
          textDecoration: location.pathname === '/' ? 'underline red 5px' : 'none',
          transition: '0.8s'
        }} className={styles.itemdesk}>Inicio</li></Link>
        <Link to={'/about'}><li style={{
          textDecoration: location.pathname === '/about' ? 'underline red 5px' : 'none',
          transition: '0.8s'
        }} className={styles.itemdesk}>Acerca de mi</li></Link>
        <Link to={'/proyectos'}><li style={{
          textDecoration: location.pathname === '/proyectos' ? 'underline red 5px' : 'none',
          transition: '0.8s'
        }} className={styles.itemdesk}>Proyectos</li></Link>
        <Link to={'/contacto'}><li style={{
          textDecoration: location.pathname === '/contacto' ? 'underline red 5px' : 'none',
          transition: '0.8s'
        }} className={styles.itemdesk}>Contacto</li></Link> 
      </ul>
    </nav>
  );
};

export default MenuDesk;
  