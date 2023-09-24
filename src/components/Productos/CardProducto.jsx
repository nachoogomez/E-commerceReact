import React from 'react'
import { BuyButton, ContainerPrice, ProductosCard } from './CardsProductosStyled'
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {addToCart} from "../../redux/cart/cartSlice";
import toast, { Toaster } from 'react-hot-toast';

import { formatPrice } from '../../utils/formatPrice';

const CardProducto = ({title, price, img, id}) => {

const dispatch = useDispatch();
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



  //() => dispatch(addToCart({img, title, price, id}))

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
              onClick={handleButton}
            >
              <BsFillCartPlusFill size={30}/>
            </BuyButton>
            <Toaster />
        </ContainerPrice>
        
    </ProductosCard>
  )
}

export default CardProducto