import React from 'react'
import {CategoriasContainer } from './CategoriasStyled'
import { useSelector } from 'react-redux'
import Categoria from './Categoria'

const Categorias = () => {

  const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriasContainer>
      {
        categories.map((category) => {
         return <Categoria {...category} key={category.id}/>
        })
      }
    </CategoriasContainer>
  )
}

export default Categorias