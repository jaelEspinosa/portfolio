import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Menu.module.css'



const Menu = ( {handleMenu} ) => {
 
   return (
    <nav>
    <ul className={styles.mobile}>
 
        <Link onClick={handleMenu} to={'/'}><li className={styles.itemmobile}><i className="fa-solid fa-house"></i>Inicio</li></Link>
        <Link onClick={handleMenu} to={'/about'}><li className={styles.itemmobile}><i className="fa-sharp fa-solid fa-circle-info"></i> Acerca de mi</li></Link>
        <Link onClick={handleMenu} to={'/proyectos'}><li className={styles.itemmobile}><i className="fa-solid fa-desktop"></i> Proyectos</li></Link>
        <Link onClick={handleMenu} to={'/contacto'}><li className={styles.itemmobile}><i className="fa-solid fa-address-card"></i>Contacto</li></Link> 
        <li  style={{ cursor:'pointer'}} onClick={handleMenu}  className={styles.itemmobile}><i className="fa-sharp fa-solid fa-circle-xmark"></i>Salir</li>
    </ul>
 
</nav>
  )
}

export default Menu