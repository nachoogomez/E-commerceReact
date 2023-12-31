import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
position: fixed;
top: 0;
right: 0;
z-index: 99;

display: flex;
flex-direction: column;
justify-content: space-between;
gap: 30px;

height: calc(100vh - 4rem);

padding: 2rem;
background-color: var(--gray-bg);
border-radius: 0 0 0 1rem;
box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

@media (max-width: 600px) {
    width: 80%;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--orange);
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 85%;
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: flex-start;
  gap: 30px;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  background-color: var(--gray-bg);
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceStyled = styled.span`
font-weight: 700;
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;

  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 300;
`;


