import React, { FC } from "react";
import { Text as TextChakra, TextProps as TextChakraProps, useTheme } from '@chakra-ui/core';
import { styled, StyledThemeTypes } from '../themes';

import { isHex } from '../utils/colors';

// interface TextProps extends  {

// };

const StyledText = styled(TextChakra)<StyledThemeTypes>`
  ${(props) => (
    props.colorized && (
      `color: ${props.colorized};`
    )
  )}

  text-shadow: ${(props) => props.theme.text.shadow};
`;

interface TextProps extends TextChakraProps {
  children: JSX.Element | JSX.Element[] | string | string[] | number;
  colorized?: boolean | string;
}


const Text = ({ children, colorized, ...props }:TextProps) => {
  const theme = useTheme();

  let componentColor = (colorized && isHex(colorized)) ? colorized : theme.colors.colorBase;

  // In case that colors is only a boolean
  if(typeof colorized === 'boolean') {
    componentColor = theme.colors.primary[500]
  }

  return (
    <StyledText
      colorized={componentColor}
      {...props}
    >
      {children}
    </StyledText>
  );
}


export default Text;
