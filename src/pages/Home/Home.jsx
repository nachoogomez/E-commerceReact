import React from 'react'
import Hero from '../../components/Hero/Hero'
import { CategoriasWrapper, HomeWrapper, ProductosWrapper, RecomendadosWrapper } from './HomeStyled'
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion'
import Categorias from '../../components/Categorias/Categorias'
import CardsProductos from '../../components/Productos/CardsProductos'
import PromosInfo from '../../components/PromosInfo/PromosInfo'

const Home = () => {
  return (
    <HomeWrapper>
      {/* Hero Section */}
      <Hero />   

       {/* Recomendados Section */}
       <RecomendadosWrapper>
        <h2>Hot Sale🔥</h2>
        <CardsRecomendacion />
        <PromosInfo/>
       </RecomendadosWrapper>

       {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias/>
      </CategoriasWrapper>

      <ProductosWrapper>
        <h2>Nuestros Productos</h2>
        <CardsProductos/>
      </ProductosWrapper>

      
    </HomeWrapper>
  )
}

export default Home