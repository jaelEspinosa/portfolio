import React, { useState } from "react";
import styles from '../styles/Header.module.css'
import Menu from "./Menu";
import MenuDesk from "./MenuDesk";
import menu from '../img/menu.png'
const Header = () => {
  const [mostrarMenu, setMostrarMenu]= useState(false)  
  const handleMenu = () => setMostrarMenu(!mostrarMenu)
  return (
    <>
    <div className={styles.header}>
      <h1>JaelEspinosa</h1>
     <div className={styles.svg}
          onClick={handleMenu}
          >
 {!mostrarMenu ? <img src={menu}></img> : <div className={styles.divVacio}></div>} 
    </div>
    
    <MenuDesk />
   
     </div>
     {mostrarMenu &&<Menu mostrarMenu={mostrarMenu} handleMenu={handleMenu}/>}
    </>
  );
};

export default Header;
