import React from 'react';
import { Text } from '~/Text';
import { Divider } from '~/Divider';
import { Input, Flex } from '@chakra-ui/core';

interface InputLabelProps {
  label: string
}

const InputLabel = ({
  label,
  ...props
}:InputLabelProps):JSX.Element => {

  return (
    <Flex mt="4px">
      <Input
        // fontSize=""
        size="sm"
        width="40px"
        height="1.5rem"
        variant="flushed"
        textAlign="center"
        borderBottom="1px"
        borderColor="primary.500"
        focusBorderColor="primary.900"
        {...props}
        />
      <Text
        mt="3px"
        ml="16px"
        align="center"
        fontSize="14px"
        color={'primary.500'}
        {...props}
      >
        {label}
      </Text>
    </Flex>
  )
}

export default InputLabel;
