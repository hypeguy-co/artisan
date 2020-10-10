import React from 'react';
import styled from '@emotion/styled';

import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as InputComponent
} from '@chakra-ui/core';

const InputComponentStyled = styled(InputComponent)`
  color: ${(props) => props.theme.colors.base};
  background: #0F110F !important;
  border: 0px !important;
`;

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={meta.error}>
      { label && (
        <FormLabel htmlFor="name">{label}</FormLabel>
      )}
      <InputComponentStyled {...field} {...props} />
      <FormErrorMessage>
        {meta.touched && meta.error}
      </FormErrorMessage>
    </FormControl>
  );
};

export default Input;
