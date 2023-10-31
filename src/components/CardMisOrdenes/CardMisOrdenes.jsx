import React from 'react'
import { IdStyled, PedidoContainerStyled, TextContainerStyled, PriceStyled, TitleStyled } from './CardMisOrdenesStyled'
import { formatPrice} from '../../utils/formatPrice';
import { formatDate } from '../../utils/formatDate';

const CardMisOrdenes = ({createdAt, status, total, _id}) => {
  return (
    <PedidoContainerStyled>
        <TextContainerStyled>
            <TitleStyled>ID de la orden: {_id.slice(0, 7)}</TitleStyled>
            <TitleStyled>Status: {status}</TitleStyled>
            <IdStyled>Fecha: {formatDate(createdAt)} hs</IdStyled>
            <PriceStyled>{formatPrice(total)}</PriceStyled>    
            </TextContainerStyled>
        

    </PedidoContainerStyled>
  )
}

export default CardMisOrdenes


        