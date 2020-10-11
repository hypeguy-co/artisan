import React from 'react';

import { Text } from '../Text';
import { Box } from '../Box';

const ListTitle = ({ title, children }) => {
  // The size prop affects the height of the button
  // but I can still override it by passing a custom height
  return (
    <Box>
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {title}
      </Text>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default ListTitle;
