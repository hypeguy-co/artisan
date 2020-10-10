import React from 'react';
import { InputGroup, InputRightElement, Button } from '@chakra-ui/core';
import Input from './Input';

const Password = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input
        name='password'
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Senha"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default Password;
