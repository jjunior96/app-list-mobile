import React from 'react';

import {Items} from './Items';

import * as S from './styled';

const ItemList: React.FC = () => {
  return (
    <S.Container>
      <S.ItemsLeft>
        <S.ItemImage source={Items[0].path} />
        <S.ItemInfo>
          <S.ItemName>{Items[0].name}</S.ItemName>
          <S.ItemDescription>
            2 {Items[0].unity} - R$ {Items[0].price}
          </S.ItemDescription>
        </S.ItemInfo>
      </S.ItemsLeft>

      <S.ItemCheck />
    </S.Container>
  );
};

export default ItemList;
