import React from 'react';
import {SafeAreaView} from 'react-native';

import {Items} from '../../components/ItemList/Items';

import ItemList from '../../components/ItemList';
import Title from '../../components/Title';
import MenuBottom from '../../components/MenuBottom';
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
          keyExtractor={() => console.log('deu')}
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
