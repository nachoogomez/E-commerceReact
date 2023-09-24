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
import toast, { Toaster } from 'react-hot-toast';

import { formatPrice } from '../../utils/formatPrice';

const CardRecomendado = ({img, title, price, id}) => {

  const dispatch = useDispatch()

  const notify = () => {toast.success('Producto agregado correctamente', {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  },
  );}

  const handleButton = () =>{
    dispatch(addToCart({img, title, price, id}));
    notify();
 }
 

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
            onClick={handleButton}>Agregar</Button>
          <Toaster />
        </Card>
      );
    };


export default CardRecomendado