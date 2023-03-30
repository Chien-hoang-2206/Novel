import React from 'react';
import { ButtonTransparent } from './TransparentStyleButton';

const TransparentButton = ({ title, onClick }) => {
  return (
    <ButtonTransparent  onClick={onClick}>
        {title}
    </ButtonTransparent>
  );
};

export default TransparentButton;
