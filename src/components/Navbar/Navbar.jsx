import React from 'react'
import {Link} from 'react-router-dom';


import { HomeTitle, NavbarContainerStyled,  CartNavStyled  } from './NavbarStyled';
import CartIcon from './CartIcon/CartIcon';
import ModalCart from './ModalCart/ModalCart';
import BurguerIcon from './BurgerIcon/BurguerIcon';
import ModalBurger from './ModalBurger/ModalBurger';

const Navbar = () => {

 

  return (
    <NavbarContainerStyled>
      <ModalBurger/>
      <ModalCart /> 
      <div>
        <Link to='/'>
            <HomeTitle>Mates Patagonicos </HomeTitle>
        </Link>
      </div>
      <CartNavStyled>
        <CartIcon />
        <BurguerIcon/>
      </CartNavStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar