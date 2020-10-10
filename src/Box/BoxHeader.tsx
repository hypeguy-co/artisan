import React, { FC } from 'react';
import { BoxProps } from '@chakra-ui/core';
import { BoxStructure, Box } from '~/Box';
import { Text } from '~/Text';
import { Divider } from '~/Divider';

interface HeaderProps extends BoxProps {
  children: JSX.Element | string;
  className?: string;
  borderColorized?: boolean | string;
};

const Header = ({
  children,
  borderColorized,
  ...props
}:HeaderProps):JSX.Element => (
  <Box {...props as BoxProps}>
    <Text mt={{ base: 4, md: 0 }} mr={6}>
      {children}
    </Text>
    <Divider
      align="left"
      opacity={'0.8'}
      fadePercentage='90%'
      borderColorized={borderColorized}
    />
  </Box>
)

export default Header;
