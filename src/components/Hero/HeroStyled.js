import styled from 'styled-components';
import backgroundImg from '../../img/background.webp'




export const HeroContainerStyled = styled.div`
  width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    opacity: 0.95;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 32px;
    padding: 0 15px; 
    
    @media(max-width: 900px){
      font-size: 20px;
    }
  }
  
`

export const HeroFormStyled = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: row;
`;

export const HeroSearchBarStyled = styled.input`
  background-color: #FFFFFF;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 1rem 2rem;
  color: black;
`;

export const ButtonSearch = styled.button `
  padding: 3px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: var(--orange);
  color: white;
  cursor: pointer;

`