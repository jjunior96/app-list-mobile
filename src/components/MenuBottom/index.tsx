import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import * as S from './styled';

const MenuBottom: React.FC = () => {
  return (
    <S.Container>
      <S.ItemContainer>
        <Icon name="list" size={38} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Total (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>

      <S.AddButton>
        <Icon name="plus" size={38} color="#fff" />
      </S.AddButton>

      <S.ItemContainer>
        <Icon name="shopping-cart" size={32} color="#20c970" />

        <S.ItemInfo>
          <S.QuantityTitle>Carrinho (6)</S.QuantityTitle>
          <S.QuantityValue>R$ 68,08</S.QuantityValue>
        </S.ItemInfo>
      </S.ItemContainer>
    </S.Container>
  );
};

export default MenuBottom;
