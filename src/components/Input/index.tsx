import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './styled';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return (
    <S.Container>
      <S.TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#62707F"
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
