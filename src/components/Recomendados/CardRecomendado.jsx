import React from 'react'
import {
    Card,
    CardImg,
    CardPrice,
    CardText,
    CardTitle,
  } from './CardsRecomendacionStyled';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

import { formatPrice } from '../../utils/formatPrice';

const CardRecomendado = ({img, title, price, id}) => {

  const dispatch = useDispatch()

  return (
        <Card>
          <CardImg
            src={img}
            alt={title}
          />
          <CardText>
            <CardTitle>{title}</CardTitle>
            <CardPrice>{formatPrice(price)}</CardPrice>
          </CardText>
          <Button
            onClick={ () => dispatch(addToCart({img, title, price, id}))}>Agregar</Button>
        </Card>
      );
    };


export default CardRecomendado