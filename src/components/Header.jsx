import React, { useState } from "react";
import styles from '../styles/Header.module.css'
import foto from "../img/foto_transparente_ruido.png";
import Menu from "./Menu";
import MenuDesk from "./MenuDesk";
import menu from '../img/menu.png'


const Header = () => {
  const [mostrarMenu, setMostrarMenu]= useState(false)  
  const handleMenu = () => {
    setMostrarMenu(!mostrarMenu)
    const $menu = document.getElementById('menu')
    const $doc = document.getElementById('velo')
    const arrayClass = [...$menu.classList]
   
    if(arrayClass.includes('rotate')){
      $menu.classList.remove('rotate')
      $doc.classList.remove('velo')
      $menu.classList.add('initial-position')
    }else{
      $doc.classList.add('velo')
      $menu.classList.remove('initial-position')
      $menu.classList.add('rotate')
    }
  }

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
          
    <img id='menu' src={menu}></img>{/* <div className={styles.divVacio}></div>  */}
    </div>
    
     <MenuDesk />
   
     {mostrarMenu &&<Menu mostrarMenu={mostrarMenu} handleMenu={handleMenu}/>}
     </div>
    </>
  );
};

export default Header;
