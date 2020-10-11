import React from 'react';
import { Text } from '../Text';
import { Box } from '../Box';
import { useTheme, styled, StyledThemeTypes } from '../themes'
import { Progress as ProgressChakra, ProgressProps as ProgressChakraProps } from '@chakra-ui/core';
import { isHex } from '../utils/colors'

interface ProgressProps {
  children: JSX.Element | string;
  label: string;
  borderRadius: string;
  valueBackgroundColor: string;
  backgroundColor: string;
  value: number | string;
  valueTotal: number[] | string[];
};

const StyledProgress = styled(ProgressChakra)<StyledThemeTypes>`
& [aria-valuemax] {
  background: ${(props) => props.valueBackgroundColor};
}
`

const Progress = ({
  children,
  label,
  borderRadius,
  backgroundColor,
  value,
  valueTotal=[],
  ...props
}: ProgressProps) => {
  const theme = useTheme()
  let backgroundColorCode = backgroundColor;
  const [current, total] = valueTotal
  const [shade, hue] = backgroundColorCode.split(".");

  if (shade && hue) {
    backgroundColorCode = theme.colors[shade][hue];
  }
  let totalComplete = value || current,
      labelValue = label;

  if(!value && (current && total)) {
    totalComplete = (Number(current) * 100) / Number(total);
  }

  if(!labelValue && (current && total)) {
    labelValue = `${current} / ${total}`;
  }

  return (
    <Box
      position="relative"
    >
      <StyledProgress
        border="1px solid"
        borderColor="primary.500"
        value={Number(totalComplete)}
        css={{
          borderRadius,
          backgroundColor: backgroundColorCode
        }}
        {...props}
      >
        <Text
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          textAlign="center"
          top="50%"
          transform="translateY(-50%)"
          fontSize="1em"
          lineHeight="1em"
        >
          {labelValue}
        </Text>
      </StyledProgress>
      <Text
        textAlign="center"
        textTransform="uppercase"
        colorized
        fontSize="0.9em"
        lineHeight="0.9em"
        mt="8px"
      >
        {children}
      </Text>
    </Box>
  )
}

export default Progress;
