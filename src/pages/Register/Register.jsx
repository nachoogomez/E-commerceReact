import React from 'react';
import { Form, LoginContainerStyled, LoginEmailStyled } from './RegisterStyled';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';

const Register = () => {

 

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
         initialValues={registerInitialValues}
         validationSchema={registerValidationSchema}
      >
        <Form>
          <LoginInput name="name" type='text' placeholder='Nombre' />
          <LoginInput name="email" type='text' placeholder='Email' />
          <LoginInput name="password" type='password' placeholder='Password'/>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  )
}

export default Register