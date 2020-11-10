import React from 'react';
import {SafeAreaView} from 'react-native';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Image from '../../components/Image';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styled';

const AddItem: React.FC = () => {
  return (
    <>
      <SafeAreaView />
      <S.Container>
        <Title text="Novo Item" />

        <Input name="name" placeholder="Nome" />
        <S.Line>
          <S.LineItem>
            <Input name="price" placeholder="Preço" keyboardType="numeric" />
          </S.LineItem>

          <S.Space />

          <S.LineItem>
            <Input
              name="quantity"
              placeholder="Quantidade"
              keyboardType="numeric"
            />
          </S.LineItem>
        </S.Line>
        <Input name="unity" placeholder="Unidade" />

        <S.ImageContainer>
          <Image />
        </S.ImageContainer>

        <S.AddCart>
          <Icon name="shopping-cart" size={24} color="#62707f" />
          <S.AddCartText>Add Carrinho</S.AddCartText>
        </S.AddCart>

        <S.ButtonContainer>
          <Button onPress={() => console.log('deu')}>Confirmar</Button>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
};

export default AddItem;
