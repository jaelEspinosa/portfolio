import React from 'react'
import styles from '../styles/Footer.module.css'
import gmail from '../img/gmail.png'
import git from '../img/github.png'
import linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <div className={styles.footer}>

      <a href='mailto:jaelespinosa@gmail.com'> <img src={gmail} alt='logo-mail'/> </a>  
      <a  href='https://github.com/jaelespinosa' target='blanck'> <img src={git} alt='logo-git'/></a>  
      <a href='https://www.linkedin.com/in/jose-antonio-espinosa-lucia/' target='blanck'> <img src={linkedin} alt='logo-linkedin'/></a> 
    </div>
  )
}

export default Footer