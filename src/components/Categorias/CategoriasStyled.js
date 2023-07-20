import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  user-select: none;
  @media (max-width: 700px){
    flex-direction: column;
  }
`;

export const CardCategoria = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 2px 15px;
    border: 2px solid var(--orange);
    cursor: pointer;
    border-radius: 10px;
    min-width: 100px;
    
    h2 {
        font-size: 1rem;
        font-weight: 800;
    
      }

      background-color: ${({ selected }) =>
      selected ? 'var(--orange)' : 'var(--gray-bg)'};
      border-radius: 15px;
      cursor: pointer;
  
  
`;