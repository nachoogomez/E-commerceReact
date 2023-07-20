import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RecomendadosWrapper = styled.div `
  display:flex;
  justify-content:center;
  flex-direction: column;
  max-width: 1200px;
  margin-top: 5rem;
  width: 100%;

  h2 {
    font-weight: 400;

    @media (max-width: 990px){
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
`;

export const CategoriasWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;


`

export const ProductosWrapper = styled.section`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px; 
  width: 100%;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
`;
