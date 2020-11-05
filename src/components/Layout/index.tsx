import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {Items} from '../ItemList/Items';

import ItemList from '../ItemList';
import Title from '../Title';
import MenuBottom from '../MenuBottom';
import * as S from './styled';

const Layout: React.FC = () => {
  const renderItem = ({}) => <ItemList />;

  return (
    <>
      <SafeAreaView />
      <S.Layout>
        <Title />
        <FlatList
          data={Items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          pagingEnabled={true}
          legacyImplementation={false}
        />
      </S.Layout>
      <MenuBottom />
    </>
  );
};

export default Layout;
