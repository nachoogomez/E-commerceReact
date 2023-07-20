import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { LinkContainerStyled } from '../NavbarStyled';
import { useDispatch } from 'react-redux';

import { toggleHiddenBurguer } from '../../../redux/burgerNav/burguerSlice';

const BurguerIcon = () => {

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenBurguer())}>
        <CiMenuBurger/>
    </LinkContainerStyled>
  )
}

export default BurguerIcon