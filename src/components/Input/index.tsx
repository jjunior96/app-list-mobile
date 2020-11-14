import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import * as S from './styled';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

interface InpuValueRef {
  value: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const {registerField, defaultValue, fieldName, error} = useField(name);
  const inputValueRef = useRef<InpuValueRef>({value: defaultValue});

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current.value,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <S.TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#62707F"
        defaultValue={defaultValue}
        onChangeText={(value) => (inputValueRef.current.value = value)}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
