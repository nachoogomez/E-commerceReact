import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;

  @media (max-width: 1200px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;