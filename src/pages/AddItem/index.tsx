import React from 'react';
import {SafeAreaView} from 'react-native';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styled';

const AddItem: React.FC = () => {
  return (
    <>
      <SafeAreaView />
      <S.Container>
        <Title text="Novo Item" />

        <Input name="name" placeholder="Nome" />
        <Input name="price" placeholder="Preço" />
        <Input name="quantity" placeholder="Quantidade" />
        <Input name="unity" placeholder="Unidade" />

        <Button onPress={() => console.log('deu')}>Confirmar</Button>
      </S.Container>
    </>
  );
};

export default AddItem;
