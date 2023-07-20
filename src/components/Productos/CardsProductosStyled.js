import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem 0;
`;

export const ProductosCard = styled.div`
    background: var(--gray-bg);
    width: 300px;
    border-radius: 15px;
    padding: 1rem;
    gap: 15px;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 80%;
        margin-bottom: 1rem;
        border-radius: 12px;
    }
    h2 {
        font-weight: 600;
        margin: 0;
        font-size: 20px;
    }
    p {
        color: white;
        font-size: 1.5rem;
    }

    @media (max-width: 780px){
      width:250px;
    }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 60px;
  align-items: center;
`;

export const BuyButton = styled(motion.button)`
  padding: 0.7rem 1.5rem;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border-left: 2px solid var(--orange);

  &:hover {
    opacity: 85%;
  }
`



