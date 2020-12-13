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
  // const [name, setName] = useState();
  // const [price, setPrice] = useState();
  // const [quantity, setQuantity] = useState();
  // const [unity, setUnity] = useState();
  // const [selectValue, setSelectValue] = useState('l');
  const navigation = useNavigation();

  const handleAddItem = useCallback((_data: object) => {
    console.log('entrou na funcoa');
  const handleAddItem = useCallback((data: object) => {
    console.log('entrou na funcao', data);
  }, []);

  const handleConfirm = useCallback(
    (data: object) => {
      handleAddItem(data);
      navigation.navigate('List');
    },
    [handleAddItem, navigation],
  );

  return (
    <>
      <SafeAreaView />
      <S.ScrollViewContainer
        contentContainerStyle={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="handled">
        <S.Container>
          <Title text="Novo Item" />

          <Form
            ref={formRef}
            onSubmit={handleConfirm}
            style={{flex: 1, width: '100%', alignItems: 'center'}}>
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
                    onUpdate={(valueInput: React.SetStateAction<undefined>) =>
                      setValue(valueInput)
                    }
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
