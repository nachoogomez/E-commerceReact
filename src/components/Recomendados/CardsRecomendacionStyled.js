import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  padding: 1rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    height: 6px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }

`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.7rem;
  background: var(--gray-bg);
  border-radius: 15px;
`;

export const CardImg = styled.img`
  width: 180px;
  height: 150px;
  border-radius: 16px;
  object-fit: cover;


`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 20px;
`;


export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  color: white;
`;