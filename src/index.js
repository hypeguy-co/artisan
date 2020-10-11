// import { ChakraProvider } from '@chakra-ui/core';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import { Banner } from './Banner';
import { Text } from './Text';
import styled from '@emotion/styled';


// const ChakraProvider = ({children}) => <>ChakraProvider{children}</>
// const Banner = ({children}) => <Banner>{children}</Banner>

// console.info(Text)

const StyledTest = styled.div`
  display: block;
  background-color: red;
  color: green;
`

const Test = () => (
  <StyledTest>
    Test
  </StyledTest>
)

export {
  Test,
  Text,
  ChakraProvider,
  Banner
};
