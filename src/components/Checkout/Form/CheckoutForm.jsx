import React from 'react';
import { CheckoutDatosStyled, Form, Formik } from './CheckoutFormStyled';

import Input from '../../UI/Input/Input';
//import Loader from '../../UI/Loader/Loader';
import Submit from '../../UI/Submit/Submit';


import {checkoutInitialValues} from '../../../formik/initialValues'
import { checkoutValidationSchema } from '../../../formik/validationSchema';

const CheckoutForm = ({cartItems}) => {

  return (
    <CheckoutDatosStyled>
        <h2>Ingresa tus datos.</h2>
        <Formik
          initialValues={checkoutInitialValues}
          validationSchema={checkoutValidationSchema}
          onSubmit={values => console.log(values)}
        >
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
              <Submit 
                disabled={!cartItems.length}
              >
                Iniciar Pedido
              </Submit>
            </div>
          </Form>
        </Formik>
    </CheckoutDatosStyled>
  )
}

export default CheckoutForm