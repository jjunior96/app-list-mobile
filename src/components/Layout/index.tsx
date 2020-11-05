import React from 'react';
import {SafeAreaView} from 'react-native';

import ItemList from '../ItemList';
import Title from '../Title';
import * as S from './styled';

const Layout: React.FC = () => {
  return (
    <>
      <SafeAreaView />
      <S.Layout>
        <Title />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
      </S.Layout>
    </>
  );
};

export default Layout;
