import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput'
import Submit from '../../components/UI/Submit/Submit'
import { Form, LoginContainerStyled, LoginEmailStyled } from './LoginStyled'
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';

const Login = () => {
  return (
    <LoginContainerStyled>
        <h1>Iniciar Sesión</h1>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={values => console.log(values)}
        >
          <Form>
            <LoginInput name="email" type='text' placeholder='Email'/>
            <LoginInput name="password" type='password' placeholder='Password' />
            <Link to='/register'>
              <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
            </Link>
            <Submit>Ingresar</Submit>
          </Form>
        </Formik>
    </LoginContainerStyled>
  )
}

export default Login