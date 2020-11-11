import React from 'react';
import {SafeAreaView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

import {Items} from '../../components/ItemList/Items';

import ItemList from '../../components/ItemList';
import Title from '../../components/Title';
import MenuBottom from '../../components/MenuBottom';
import * as S from './styled';

const List: React.FC = () => {
  const renderItem = ({}) => <ItemList />;
  // const navigation = useNavigation();

  return (
    <>
      <SafeAreaView />
      <S.List>
        <Title text="Extra Forte" />
        <S.FlatListContainer
          data={Items}
          renderItem={renderItem}
          keyExtractor={() => console.log('deu')}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={true}
          legacyImplementation={false}
        />
      </S.List>
      <MenuBottom />
    </>
  );
};

export default List;
