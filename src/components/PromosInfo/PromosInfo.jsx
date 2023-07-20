import React from 'react'
import { Divider, PromoCard, PromosContainer, PromosOfertas } from './PromosInfoStyled'
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";

const PromosInfo = () => {
  return (
    <PromosContainer>
        <h2>¿Porqué confiar en nosotros?</h2>
        <PromosOfertas>
            <PromoCard>
                <BsFillCreditCardFill/>
                <h3>3 CUOTAS SIN INTERÉS</h3>
                <p>CON TODAS LAS TARJETAS</p>
            </PromoCard>
            <Divider/>
            <PromoCard>
                <BsBank2/>
                <h3>10% DESCUENTO</h3>
                <p>ABONANDO CON TRANSFERENCIA BANCARIA</p>
            </PromoCard>
            <Divider/>
            <PromoCard>
                <FaTruck/>
                <h3>ENVÍOS A TODO EL PAÍS</h3>
                <p>Hacemos envios gratis a todo el pais</p>
            </PromoCard>
        </PromosOfertas>
    </PromosContainer>
  )
}

export default PromosInfo