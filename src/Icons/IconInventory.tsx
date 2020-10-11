import React from 'react';
import { Text } from '../Text';
import { BoxStructure } from '../Box';
// import { TooltipItem } from '../Tooltip';
import { Box, Img } from '@chakra-ui/core';

interface IconInventoryProps {
  children: JSX.Element | string;
  backgroundColor: string;
  name: string;
  description: string;
};

const enumProps = {
  empty: {
    backgroundColor: '#737271'
  },
  sword: {
    backgroundColor: "#aa9587"
  }
}

const IconInventory = ({ name, ...props }: IconInventoryProps):JSX.Element => {
  const nameItem = name || 'empty';

  return (
    <Box
      flex="1 0 20%"
      maxWidth="20%"
      padding="6px"
      {...props}
    >
      <BoxStructure borderColorized>
      {/* <TooltipItem category="weapon"> */}
     
        <Box
          padding="0.2em"
          margin="0.2em"
          css={{ ...enumProps[nameItem] }}
          borderRadius="6px"
        >
          <Img src={`/icons/${name.toLowerCase() || 'empty'}.png`}/> 
        </Box>
        {/* </TooltipItem> */}
      </BoxStructure>
  </Box>
  )
}

export default IconInventory;
