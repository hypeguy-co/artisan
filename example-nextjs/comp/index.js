import React from 'react';
import theme from './theme';

import * as CK from '../../';

console.info(CK)

const Data = () => {
  // const {width, height } = useWindowSize();

  return (
    <div>
      <CK.ChakraProvider theme={theme}>
        <CK.Banner />

        <CK.Text>
          WTF
          WTF
          WTF
          WTF
          WTF
        </CK.Text>
      </CK.ChakraProvider>
      <CK.Test/>
      {/* test */}
    </div>
  )
}

export default Data