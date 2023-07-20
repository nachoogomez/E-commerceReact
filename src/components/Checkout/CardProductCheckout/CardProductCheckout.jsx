import React from 'react'
import { CardContainerStyled, CardInfoStyled, PriceStyled, ProductTitleStyled, QuantityContainerStyled } from './CardProductCheckoutStyled'
import Increase from '../../UI/Increase/Increase';
import Count from '../../UI/Count/Count';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import {formatPrice} from '../../../utils/formatPrice';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';

const CardProductCheckout = ({img, title, price, id, quantity}) => {

  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <img
        src={img}
        alt={id}
      />
       <CardInfoStyled>
          <ProductTitleStyled>{title}</ProductTitleStyled>
          <PriceStyled>{formatPrice(price)}</PriceStyled>
       </CardInfoStyled>
       <QuantityContainerStyled>
          <Increase
             onClick={() => dispatch(removeFromCart(id))}
          >
            {quantity === 1 ? <IoMdTrash/> : <FaMinus />}
          </Increase>
          <Count>{quantity}</Count>
          <Increase 
            onClick={() => dispatch(addToCart({img, title, price, quantity, id}))}
            ><BsPlusLg/>
          </Increase>
       </QuantityContainerStyled>
    </CardContainerStyled>
  )
}

export default CardProductCheckout