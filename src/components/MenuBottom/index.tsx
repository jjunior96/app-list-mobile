/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import TotalIcon from '../../assets/total-icon.png';
import PluslIcon from '../../assets/plus-icon.png';
import CartlIcon from '../../assets/cart-icon.png';

import * as S from './styled';

const MenuBottom: React.FC = () => {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.Image source={TotalIcon} />

        <S.ItemInfo>
          <S.QuantityTitle>Total (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>

      <S.AddButton>
        <Image source={PluslIcon} style={{width: 24, height: 24}} />
      </S.AddButton>

      <S.ItemContainer>
        <S.Image source={CartlIcon} />

        <S.ItemInfo>
          <S.QuantityTitle>Carrinho (1)</S.QuantityTitle>
          <S.QuantityValue>R$ 21,00</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>
    </S.Container>
  );
};

export default MenuBottom;
