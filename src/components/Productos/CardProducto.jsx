import React from 'react'
import { BuyButton, ContainerPrice, ProductosCard } from './CardsProductosStyled'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/cart/cartSlice";

import { formatPrice } from '../../utils/formatPrice';

const CardProducto = ({title, price, img, id}) => {

  const dispatch = useDispatch()

  return (
    <ProductosCard>
        <img 
          src={img} 
          alt={title}
          />
        <h2>{title}</h2>
        <ContainerPrice>
            <p>{formatPrice(price)}</p>
            <BuyButton
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(addToCart({img, title, price, id}))}
            >
              <BsFillCartPlusFill size={30}/>
            </BuyButton>
        </ContainerPrice>
        
    </ProductosCard>
  )
}

export default CardProducto