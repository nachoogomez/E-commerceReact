import React from 'react';
import {useNavigate} from "react-router-dom"

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyled';

import { checkoutInitialValues } from '../../../formik/initialValues';
import {checkoutValidationSchema} from '../../../formik/validationSchema'
import { createOrder } from '../../../axios/axios-order';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/cart/cartSlice';

import Loader from "../../UI/Loader/Loader"

const CheckoutForm = ({cartItems, price, shippingCost}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {currentUser} = useSelector(state => state.user)

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={ async (values) => {
          const orderData = {
            price,
            shippingCost,
            total: price,
            shippingDetails: {
              ...values
            },
            items: cartItems
          };

          console.log(orderData);

          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate("/");
            dispatch(clearCart());
          } catch (error) {
            console.log(error);
            alert("error al crear la orden")
          }

        } }
      >

        {
          ({isSubmitting}) => (
            <Form>
            <Input
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
            name="name"
          >
            Nombre
          </Input>
          <Input
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
            name="cellphone"
          >
            Celular
          </Input>
          <Input
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
            name="location"
          >
            Localidad
          </Input>
          <Input
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
            name="address"
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>
              {isSubmitting ? <Loader /> : "Iniciar Pedido"}
            </Submit>
          </div>
        </Form>
          )
        }

      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;