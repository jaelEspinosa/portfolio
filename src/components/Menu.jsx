import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Menu.module.css'
const Menu = ({handleMenu}) => {
  return (
    <nav>
    <ul className={styles.mobile}>
    <button
            onClick={handleMenu} 
            className={styles.cerrar}
            type='button'>X
        </button>

        <Link onClick={handleMenu} to={'/'}><li className={styles.itemmobile}>Home</li></Link>
        <Link onClick={handleMenu} to={'/about'}><li className={styles.itemmobile}>Acerca de mi</li></Link>
        <Link onClick={handleMenu} to={'/contacto'}><li className={styles.itemmobile}>Contacto</li></Link> 
        <Link onClick={handleMenu} to={'/proyectos'}><li className={styles.itemmobile}>Proyectos</li></Link>
    </ul>
 
</nav>
  )
}

export default Menu