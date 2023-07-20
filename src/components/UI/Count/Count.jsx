import React from 'react';
import { CountStyled } from './CountStyled';

const Count = ({ children }) => {
  return <CountStyled>{children}</CountStyled>;
};

export default Count;