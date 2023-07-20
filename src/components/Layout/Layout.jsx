import React, {useEffect} from 'react'
import { LayoutWrapper } from './LayoutStyled';
import { useLocation } from 'react-router-dom';


const Layout = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout