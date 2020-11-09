import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  padding: 12px 20px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 140px;
  height: 140px;
`;

export const AddCart = styled.TouchableOpacity`
  margin-top: 16px;
  padding: 8px 16px;
  border-style: solid;
  border-color: #62707f;
  border-width: 2px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const AddCartText = styled.Text`
  color: #62707f;
  font-family: 'Roboto';
  font-size: 16px;
  margin-left: 16px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  width: 100%;
  margin-bottom: 64px;
  bottom: 0;
`;
