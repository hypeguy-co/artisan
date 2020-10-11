import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { Image } from '../Image';

const StyledBox = styled(Box)`
  position: relative;
  color: ${(props) => props.theme.text.colorBase};
  text-shadow: ${(props) => props.theme.text.shadow};

  .title {
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
    position: absolute;
    padding: 5px;
    bottom: 0px;
    width: 100%;
  }
`;

const Banner = ({ src, title, ...props }) => (
  <StyledBox {...props}>
    <Image src={src} />
    <Box className="title">{title}</Box>
  </StyledBox>
);

export default Banner;
