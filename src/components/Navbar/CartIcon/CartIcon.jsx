import React from 'react'
import { LinkContainerStyled } from '../NavbarStyled';

import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';


const CartIcon = () => {

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
        <FaShoppingCart />
    </LinkContainerStyled>
  )
}

export default CartIcon