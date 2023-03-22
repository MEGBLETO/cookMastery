import styled from 'styled-components/native';
import {FlatList} from 'react-native';




export const PagecontainerWhite = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MealList = styled(FlatList)`
  padding: 10px;
  background-color: #36454F	;
`;

export const MealItem = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  height: 200px;
`;

export const MealImage = styled.Image`
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;

export const MealTitle = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'blue',
})``;