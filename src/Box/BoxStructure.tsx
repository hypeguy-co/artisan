import React  from 'react';
import { Box } from '@chakra-ui/core';
import { StyledThemeTypes, styled } from '~/themes';

import BoxHeader from './BoxHeader';
import BoxFooter from './BoxFooter';

const StyledBox = styled(Box)<StyledThemeTypes>`
  background: ${(props) => props.theme.content.backgroundColor};
  
  ${(props) => (
    props.borderColorized && (
      `border: 1px solid ${props.theme.border.color};`
    )
  )}

  ${(props) => (
    !props.borderRadius && (
      `border-radius: ${props.theme.content.borderRadius};`
    )
  )}

  ${(props) => (
    props.blurred && (
      `backdrop-filter: blur(${props.theme.content.backgroundBlur});`
    )
  )}
`;

interface BoxStructureProps {
  children: JSX.Element[] | JSX.Element;
  className: string;
  title: string;
  borderColorized?: boolean;
  blurred: boolean;
  height: string | number;
  width: string | number;
  borderRadius: string | number;
};

const BoxStructure = ({
  children,
  className,
  borderColorized, 
  blurred,
  ...props
}: BoxStructureProps) => {
  let header,
      footer,
      content = children

  if(Array.isArray(children)) {
    header = children.filter((child) => child.type === BoxHeader)
    footer = children.filter((child) => child.type === BoxFooter)
    content = children.filter((child) => child.type !== BoxFooter && child.type !== BoxHeader)
  }

  return (
    <StyledBox
      className={className}
      borderColorized={borderColorized}
      blurred={blurred}
      {...props}
    >
      {header}
      {content}
      {footer}
    </StyledBox>
  )
}

export default BoxStructure;
