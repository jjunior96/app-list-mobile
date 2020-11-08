import React from 'react';
import {SafeAreaView} from 'react-native';

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
        <S.FlatListContainer
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
