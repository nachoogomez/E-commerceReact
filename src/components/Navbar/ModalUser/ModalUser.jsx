import React from 'react'
import { MdLocalShipping} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {  SpanStyled, UserContainerStyled } from '../NavbarStyled';

export const ModalUser = () => {
  return (
    <Link to="/mis-ordenes">
      <UserContainerStyled>
        <MdLocalShipping/>
        <SpanStyled>
          <span>Mis Ordenes</span>
        </SpanStyled>
      </UserContainerStyled>
      
      
    </Link>
  )
}

