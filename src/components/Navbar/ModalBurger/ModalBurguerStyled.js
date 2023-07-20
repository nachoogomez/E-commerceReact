import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BurgerContainerStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;

    display: flex;
    flex-direction: column;
    gap: 30px;
    height: calc(100vh - 4rem);
    width: calc(50vh - 10rem);
    padding: 2rem;
    background-color: var(--gray-bg);
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

 
`;



