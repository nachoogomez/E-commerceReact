import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenBurguer } from '../../../redux/burgerNav/burguerSlice';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import { CloseButtonContainerStyled, CloseButtonStyled } from '../ModalCart/ModalCartStyled';

import { HiHome } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineClose} from 'react-icons/md';
import { BurgerContainerStyled,  LinksContainerStyled } from './ModalBurguerStyled';
import { LinkContainerStyled, UserContainerStyled, SpanStyled, UserNavStyled } from '../NavbarStyled';
import { setCurrentUser } from '../../../redux/user/userSlice';
import { ModalUser } from '../ModalUser/ModalUser';

const ModalBurger = () => {

    const hiddenBurger = useSelector(state => state.burguer.hidden);

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const navigate = useNavigate();

  return (
    <>
        <AnimatePresence>
            {!hiddenBurger && (
                <BurgerContainerStyled
                initial={{ translateX: 600 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: 600 }}
                transition={{ type: 'spring', damping: 27 }}
                key='cart-modal'>
                    <CloseButtonContainerStyled>
                        <CloseButtonStyled
                            className='close__modal '
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch(toggleHiddenBurguer())}
                        >
                          <MdOutlineClose size='24px' />     
                        </CloseButtonStyled>
                    </CloseButtonContainerStyled>
                    <LinksContainerStyled>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Link to='/'>
                                <LinkContainerStyled>
                                    <HiHome />
                                </LinkContainerStyled>
                                Home
                            </Link>
                        </motion.div>
                        {
                            currentUser ? <ModalUser/> : null
                        }   
                        <UserNavStyled>
                            <Link to='/login'>
                                <UserContainerStyled  onClick={() => 
                                    currentUser
                                    ? navigate("/")  
                                    : navigate("/login")
                                    }>
                                    <FaUserAlt />
                                    <SpanStyled>
                                    {
                                        currentUser ? <span onClick={() => {
                                            dispatch(setCurrentUser(null))
                                          }}>Cerrar Sesion</span>
                                           : 'Iniciá sesion'
                                    }
                                    </SpanStyled>
                                </UserContainerStyled>     
                            </Link>
                        </UserNavStyled>    
                               
                    </LinksContainerStyled>
                </BurgerContainerStyled>
            )}
        
            
        </AnimatePresence>
    </>
  )
}

export default ModalBurger