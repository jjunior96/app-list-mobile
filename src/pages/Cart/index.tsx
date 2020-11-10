import React from 'react';
import {SafeAreaView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

import {Items} from '../../components/ItemList/Items';

import ItemList from '../../components/ItemList';
import Title from '../../components/Title';
import MenuBottom from '../../components/MenuBottom';
import * as S from './styled';

const Cart: React.FC = () => {
  const renderItem = ({}) => <ItemList />;
  // const navigation = useNavigation();

  return (
    <>
      <SafeAreaView />
      <S.Cart>
        <Title text="Carrinho" />
        <S.FlatListContainer
          data={Items}
          renderItem={renderItem}
          keyExtractor={() => console.log('deu')}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={true}
          legacyImplementation={false}
        />
      </S.Cart>
      <MenuBottom />
    </>
  );
};

export default Cart;
