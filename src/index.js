// import { ChakraProvider } from '@chakra-ui/core';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import { Banner } from './Banner';
import { Text } from './Text';


// const ChakraProvider = ({children}) => <>ChakraProvider{children}</>
// const Banner = ({children}) => <Banner>{children}</Banner>

console.info(Text)

const Test = () => (
  <div>
    Test
  </div>
)

export {
  Test,
  Text,
  ChakraProvider,
  Banner
};
