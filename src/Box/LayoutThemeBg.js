import React from 'react';
import styled from '@emotion/styled';
import { Box, useTheme } from '@chakra-ui/core';
import { useRouter } from 'next/router';

const StyledLayoutThemeBg = styled(Box)`
  background-repeat: no-repeat; 
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
}`;

const LayoutThemeBg = ({ children, ...props }) => {
  const { route } = useRouter();
  const { name, content } = useTheme();
  const page = route.replace('/', '');

  let background = content.pages[page]?.backgroundImage ||
    content.backgroundImage ||
    '';

  background = background.replace(/(\.[\w\d_-]+)$/i, '-blurred$1');

  return (
    <StyledLayoutThemeBg {...props} style={{ backgroundImage: `url(/themes/${name}/${background})` }}>
      {children}
    </StyledLayoutThemeBg>
  );
};

export default LayoutThemeBg;


