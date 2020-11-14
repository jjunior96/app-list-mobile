/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Image from '../../components/Image';

import * as S from './styled';
import {useNavigation} from '@react-navigation/native';

const AddItem: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [value, setValue] = useState();
  const navigation = useNavigation();

  const handleAddItem = useCallback((data: object) => {
    console.log('entrou na funcoa');
  }, []);

  return (
    <>
      <SafeAreaView />
      <S.ScrollViewContainer
        contentContainerStyle={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="handled">
        <S.Container>
          <Title text="Novo Item" />

          <Form ref={formRef} onSubmit={handleAddItem}>
            <Input name="name" placeholder="Nome" />
            <S.Line>
              <S.LineItem>
                <S.InputPriceContainer>
                  <S.InputPrice
                    placeholder="Preço"
                    keyboardAppearance="dark"
                    placeholderTextColor="#62707F"
                    type="currency"
                    locale="BRL"
                    currency="BRL"
                    value={value}
                    onUpdate={(value) => setValue(value)}
                  />
                </S.InputPriceContainer>
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
              {/* <Button onPress={() => navigation.navigate('List')}> */}
              <Button onPress={() => formRef.current?.submitForm()}>
                Confirmar
              </Button>
            </S.ButtonContainer>
          </Form>
        </S.Container>
      </S.ScrollViewContainer>
    </>
  );
};

export default AddItem;
