import React from 'react';
import { useTheme, Image } from '@chakra-ui/core';

const ImageTheme = ({ src }) => {
  const theme = useTheme();
  return <Image src={`themes/${theme.name}/${src}`}/>;
};

export default ImageTheme;
