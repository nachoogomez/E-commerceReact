import React, { useState } from 'react'
import CardProducto from './CardProducto';
import {ButtonContainerStyled} from '../../pages/Home/HomeStyled'
import Button from '../UI/Button/Button'
import { ProductosContainer } from './CardsProductosStyled';
import { useSelector } from 'react-redux';
import {INITIAL_LIMIT} from "../../utils/constants"


const CardsProductos = () => {
  
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);

  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const totalProducts = useSelector((state) => state.products.totalProducts)

  if(selectedCategory){
    products = {
      [selectedCategory]: products[selectedCategory]
    }
  }

  return (
    <>
     <ProductosContainer>
       {
         Object.entries(products).map(([,productos]) => {
          return productos.map((producto) => {
            if (limit >= producto.id || selectedCategory){
              return <CardProducto {...producto} key={producto.id} />  
            }
            return null
          })
        })
       }
      </ProductosContainer>
      {
        !selectedCategory && (
          <ButtonContainerStyled>
            <Button onClick={() =>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>Ver Mas</Button>
            <Button  onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)} disabled={INITIAL_LIMIT === limit}>Ver Menos</Button>
          </ButtonContainerStyled>
        )
      }
    </>
  )
}

export default CardsProductos