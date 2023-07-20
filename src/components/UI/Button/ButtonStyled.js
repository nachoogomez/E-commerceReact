import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: var(--orange);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 85%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #252525;
      & span {
        background: white;
        font-weight: 800;
        
      }
    `}
`;