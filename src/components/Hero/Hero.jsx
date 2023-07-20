import React from 'react';
import {HeroContainerStyled, HeroFormStyled, HeroSearchBarStyled} from './HeroStyled';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../UI/Button/Button';




const Hero = () => {
  

  return (
    <HeroContainerStyled>
      <h1>La mayor variedad de mates y bombillas de todo el país</h1>
      {/* <HeroFormStyled>
        <HeroSearchBarStyled
          
          type='text'
          placeholder= 'Ej. Mate Imperial'
        />
        <Button radius='10' disabled={true}>
          <AiOutlineSearch size={15}/>
          Search
        </Button>
        </HeroFormStyled> */}
    </HeroContainerStyled>
  )
}

export default Hero