import React from 'react';
// import {Text} from 'react-native';

import * as S from './styled';

const ItemList: React.FC = () => {
  return (
    <S.Container>
      <S.ItemsLeft>
        <S.ItemImage />
        <S.ItemInfo>
          <S.ItemName>Arroz</S.ItemName>
          <S.ItemDescription>2 Kg - R$ 10,50</S.ItemDescription>
        </S.ItemInfo>
      </S.ItemsLeft>

      <S.ItemCheck />
    </S.Container>
  );
};

export default ItemList;
