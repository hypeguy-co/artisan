import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import theme from './theme';

import {
  ChakraProvider, 
  Banner,
  Test,
  Text
} from '../dist';
import './App.css';

const Data = () => {
  // const {width, height } = useWindowSize();

  return (
    <div>
      <ChakraProvider theme={theme}>
        <Banner />

        <Text>
          WTF
        </Text>
      </ChakraProvider>
      <Test/>
      test
    </div>
  )
}

export default Data