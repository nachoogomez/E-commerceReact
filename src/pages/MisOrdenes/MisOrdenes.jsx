import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MisOrdenesBtnContainerStyled, MisOrdenesContainerStyled, MisOrdenesTitleStyled } from './MisOrdenesStyled'
import { useSelector } from 'react-redux';
import CardsMisOrdenes from '../../components/CardMisOrdenes/CardsMisOrdenes';
import Button from '../../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../axios/axios-order';
import { clearError, fetchOrdersFail } from "../../redux/orders/orderSlice";

export const MisOrdenes = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(state => state.user.currentUser);
  const {orders, error} = useSelector(state => state.orders);

    useEffect(() => {   
      if(!orders) {
        getOrders(dispatch, currentUser)
      };
      if (!currentUser?.token) {
        dispatch(fetchOrdersFail())
      } else {
        error && dispatch(clearError())
      }

    }, [currentUser, orders, error, dispatch]);
  

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Tus ordenes {currentUser.nombre}</MisOrdenesTitleStyled>
          <CardsMisOrdenes/>
          <MisOrdenesBtnContainerStyled>
            <Button onClick={() => navigate('/')}>Volver al inicio</Button>
          </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
    
  )
}
