import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/core';

const Button = ({children, ...props}) => {

  // The size prop affects the height of the button
  // but I can still override it by passing a custom height
  return (
    <ButtonChakra
      children={children}
      {...props}
    >
      {children}
    </ButtonChakra>
  );
}



export default Button;
