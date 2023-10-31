import React from 'react'
import { FooterContainer, FooterLinks, FooterText } from './FooterStyled'
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <h2>Mates Patagonicos</h2>
        <p>¡Bienvenidos a nuestra página sobre mates! Somos un emprendimiento apasionado por compartir la cultura argentina y la tradición de tomar mate. Nuestro objetivo es difundir la rica historia y los placeres que ofrece esta deliciosa bebida.</p>
          <FooterLinks>
              <a href="https://www.instagram.com/matespatagonicos/?hl=es" target="_blank" rel="noreferrer"><AiFillInstagram size={30}/></a>
              <a href="https://www.facebook.com/profile.php?id=100068540162492&is_tour_dismissed=true" target="_blank" rel="noreferrer"><AiFillFacebook size={30}/></a>
              <a href="https://github.com/nachoogomez" target="_blank" rel="noreferrer"><AiFillGithub size={30}/></a>
          </FooterLinks>  
        <p>&#169;Copyright 2023 Ignacio Gomez All Rights Reserved</p>
        </FooterText>
      
    </FooterContainer>
  )
}

export default Footer