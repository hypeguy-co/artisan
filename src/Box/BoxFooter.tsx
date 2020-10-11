import React from 'react';
import { Text } from '../Text';
import { Box } from '../Box';
import { Divider } from '../Divider';

interface FooterProps {
  children: JSX.Element | string;
  borderColorized: boolean | string;
};

const Footer = ({
  children,
  borderColorized,
  ...props
}:FooterProps):JSX.Element => {
  const isString = typeof children === 'string'
  const wrapperComp = isString ?
    <Text
      mt="24px"
      align="center"
      textTransform="uppercase"
      fontSize="14px"
      colorized
      {...props}
    >
      {children}
    </Text>
  : children

  return (
    <Box>
      {wrapperComp}
    </Box>
  )
}

export default Footer;
