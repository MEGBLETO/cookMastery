
import styled from 'styled-components/native';
import {View, Text, FlatList, Image} from 'react-native';


export const Container = styled.View`
  flex: 1;
  background-color: #36454F ;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const ItemImage = styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: white;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  color: white;
`;