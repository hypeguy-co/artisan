import React from 'react';
import Tippy from '@tippyjs/react';
import { Box } from '@chakra-ui/core';

import { styled, StyledThemeTypes } from '../themes';

const SVGArrow = '<svg width="16"height="6"xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"/></svg>'

interface TooltipProps {
  children: JSX.Element;
  content: JSX.Element | string;
};

const StyledTooltip = styled(Tippy)<StyledThemeTypes>`
  background: black;
  border: 1px solid ${(props) => props.theme.border.color};

  & .tippy-arrow {
    color: black;
  }

  & .tippy-svg-arrow svg{
    fill:yellow;
  }
  & .tippy-svg-arrow svg + svg { 
    fill: black;
  }
`

const Tooltip = ({
  children,
  content
}:TooltipProps) => {
  return (
    <StyledTooltip
      arrow={SVGArrow + SVGArrow}
      offset={[0,20]}
      content={content}
    >
      {children}
    </StyledTooltip>
  )
}

export default Tooltip
