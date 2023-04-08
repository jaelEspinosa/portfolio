import React, { useState } from "react";
import styles from '../styles/Header.module.css'
import foto from "../img/foto_transparente_ruido.png";
import Menu from "./Menu";
import MenuDesk from "./MenuDesk";
import menu from '../img/menu.png'
const Header = () => {
  const [mostrarMenu, setMostrarMenu]= useState(false)  
  const handleMenu = () => setMostrarMenu(!mostrarMenu)
  return (
    <>
    <div className={styles.header}>
      <div className={styles.contFoto}>
      <img src={foto}/>
      </div>
      <h1 className={styles.title}>JaelEspinosa</h1>
      <div style={{flex:1}}></div>
     <div className={styles.svg}
          onClick={handleMenu}
          >
          
    {!mostrarMenu ? <img src={menu}></img> : <div className={styles.divVacio}></div>} 
    </div>
    
     <MenuDesk />
   
     {mostrarMenu &&<Menu mostrarMenu={mostrarMenu} handleMenu={handleMenu}/>}
     </div>
    </>
  );
};

export default Header;
