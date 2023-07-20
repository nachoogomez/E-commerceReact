import React from 'react'
import { ContainerCheckoutStyled } from './CheckOutStyled'
import CheckoutForm from '../../components/Checkout/Form/CheckoutForm'
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout'
import { useSelector } from 'react-redux'

const CheckOut = () => {

  const {cartItems, shippingCost} = useSelector(state => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0)

  return (
    <ContainerCheckoutStyled>
      <CheckoutForm
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
      <ProductsCheckout
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
    </ContainerCheckoutStyled>
  )
}

export default CheckOut