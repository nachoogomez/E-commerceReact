import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonContainerStyled, CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, MainContainerStyled, PriceContainerStyled, PriceStyled, ProductsWrapperStyled, SubtotalStyled, TitleStyled, TotalStyled } from './ModalCartStyled'
import {ModalOverlayStyled} from '../NavbarStyled';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import Increase from '../../UI/Increase/Increase';
import Submit from '../../UI/Submit/Submit';

import {clearCart, toggleHiddenCart} from '../../../redux/cart/cartSlice';
import { formatPrice } from '../../../utils/formatPrice';



import { AnimatePresence } from 'framer-motion';
import ModalCartCard from './ModalCartCard';
import { useNavigate } from 'react-router-dom';

const ModalCart = () => {

    const hiddenCart = useSelector(state => state.cart.hidden);
    const {cartItems, shippingCost} = useSelector(state => state.cart);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((acc, item) =>{
        return (acc += item.price * item.quantity)
      }, 0)
    

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}  
      <AnimatePresence>
        {!hiddenCart && (
        <ContainerStyled
        initial={{ translateX: 600 }}
        animate={{ translateX: 0 }}
        exit={{ translateX: 600 }}
        transition={{ type: 'spring', damping: 27 }}
        key='cart-modal'>
            <CloseButtonContainerStyled>

                <CloseButtonStyled
                    className='close__modal '
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(toggleHiddenCart())}
                >
                    <MdOutlineClose size='24px' />
                </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
                <TitleStyled>
                    <h1>Tus Productos</h1>
                    <Increase
                        disabled={!cartItems.length}
                        onClick={() => dispatch(clearCart())}
                     >
                        <IoMdTrash />
                    </Increase>
                </TitleStyled>
                <ProductsWrapperStyled>
                    {
                         cartItems.length ? (
                            cartItems.map((item) => {
                              return <ModalCartCard {...item} key={item.id} />
                            })
                          ) : (
                            <p>Tu carrito esta vacio.</p>
                          )
                    }
                </ProductsWrapperStyled>
            </MainContainerStyled>
                  
            <PriceContainerStyled>
                <SubtotalStyled>
                    <p>Subtotal:</p>
                    <span>{formatPrice(totalPrice)}</span>
                </SubtotalStyled>
                <TotalStyled>
                    <p>Envio</p>
                    <span>{formatPrice(shippingCost)}</span>
                </TotalStyled>
                <hr />
                <TotalStyled>
                    <p>Total:</p>
                    <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit 
                    onClick={() => {
                        navigate('/checkout');
                        dispatch(toggleHiddenCart())
                    }}
                    disabled={!cartItems.length}
                >Iniciar pedido</Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
        </ContainerStyled>

        )}
        </AnimatePresence>
    </>
  )
}

export default ModalCart