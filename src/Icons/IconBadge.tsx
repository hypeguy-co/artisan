import React, { FC } from "react";

import { styled, useTheme } from '../themes';
import { Hexagon, Shield } from '../Icons/SvgIcons';
import { Box, BoxStructure } from '../Box';
import { Text } from '../Text';

type baseElement = 'circle' | 'hexagon' | 'shield' | 'square' | 'rectangle';

interface BaseElementProps {
  base: baseElement;
  baseSize: string;
}

const BaseElement: FC<BaseElementProps> = ({
  base,
  baseSize,
  ...props
}) => {
  const theme = useTheme()
  const compProps = {
    general: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: -1,
    },
    circle: {
      borderRadius: '100%',
    },
    square: {
      borderRadius: '10px',
    },
    rectangle: {
      borderRadius: '10px',
    },
    hexagon: {
      fill: 'rgba(0,0,0,0.3)',
      stroke: theme.border.color,
      'stroke-width': '0.4'
    },
    shield: {
      fill: 'rgba(0,0,0,0.3)',
      stroke: theme.border.color,
      'stroke-width': '0.4'
    }
  }

  if (base === 'circle' || base === 'square' || base === 'rectangle') {
    return (
      <BoxStructure
        depthContent
        borderColorized
        {...compProps.general}
        {...compProps[base]}
        {...props}
      />
    )
  }

  if(base === 'shield') {
    return (
      <Shield
        // viewBox="0 0 24 24"
        // style={{...compProps.general, ...compProps[base]}}
      />
    )
  }

  return (
    <Hexagon
      // viewBox="0 0 24 24"
      // style={{...compProps.general, ...compProps[base]}}
    />
  )
}


interface IconBadgeProps {
  children: JSX.Element;
  base: baseElement;
  icon: string;
  extra: string;
  label: string;
  className: string;
  size: string;
};

const IconBadgeStyled = styled(Box)`
  position: relative;
`;

const IconBadge: FC<IconBadgeProps> = ({
  children,
  base,
  icon,
  label,
  extra,
  size = '5em',
  ...props
}): JSX.Element => {
  const height = size
  let width = size

  if (base === "rectangle") {
    width = '100%'
  }

  const fontSize = '24px';
  return (
    <IconBadgeStyled
      my="20px"
      mx="5px"
      width={width}
      height={height}
    >
      <Box
        fontSize={fontSize}
        height="100%"
        display={'flex'}
        {...props}
      >
        <BaseElement
          base={base}
          baseSize={size}
        />
        <Box m={'auto'}>{children}</Box>
      </Box>
      {(extra || label) && (
        <Box
          position="absolute"
          bottom="-22px"
          left="0"
          right="0"
          textAlign="center"
          height="30px"
        >
          {extra && (
            <Box
              background="#191817"
              borderRadius="10px"
              marginBottom="-10px"
              border="1px solid #ddae5d"
              textAlign="center"
              marginLeft="auto"
              marginRight="auto"
              width="calc(100% - 20px)"
            >
              <Text fontSize="10px">{extra}</Text>
            </Box>
          )}
          {label && (
            <Text
              colorized
              textTransform="uppercase"
              lineHeight="1em"
              fontSize="0.8em"
              marginTop="17px"
            >
              {label}
            </Text>
          )}
        </Box>
      )}
    </IconBadgeStyled>
  )
}


IconBadge.defaultProps = {
  base: 'circle' 
}

export default IconBadge;
