import styled from 'styled-components';
import { motion } from 'framer-motion';


export const NavbarContainerStyled = styled.div`
height: 55px;
background-color: #18191a;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
`;


export const HomeTitle = styled.h1`
    font-size: 20px;

    @media(max-width: 900px){
      font-size: 14px;
    }
`


export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ff9d01' : '#ff9300')};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  gap: 10px;
`;




export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  display: flex; 
  gap: 30px;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 300px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    `
      backdrop-filter: blur(4px);
    `}
`;