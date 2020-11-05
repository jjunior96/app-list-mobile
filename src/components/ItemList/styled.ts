import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #203449;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ItemsLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.View`
  height: 48px;
  width: 48px;
  background-color: red;
  border-radius: 8px;
`;

export const ItemInfo = styled.View`
  margin-left: 8px;
`;

export const ItemName = styled.Text`
  color: #fff;
  font-size: 18px;

  margin-bottom: 4px;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border: 2px solid #20c970;
  border-radius: 50px;
`;
