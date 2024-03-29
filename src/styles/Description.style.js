import styled from 'styled-components/native';




export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #36454f;
`;


export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;



export const Instructions = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  color: white;
`;

export const IngredientsContainer = styled.View`
  margin-top: 20px;
`;

export const IngredientsHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

export const IngredientItem = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: white;
`;
