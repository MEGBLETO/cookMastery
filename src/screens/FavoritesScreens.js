import {View, Text, FlatList, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import LikedContext from '../contexts/Likecontext';
import { useNavigation } from '@react-navigation/native';


const Container = styled.View`
  flex: 1;
  background-color: #36454F ;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

const ItemImage = styled.Image`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

const ItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: white;
`;

const ItemText = styled.Text`
  font-size: 14px;
  color: white;
`;

export default function FavoritesScreens({}) {
    const navigation = useNavigation()
  const [meals, setMeals] = useState([]);
  const {Liked, likePost} = useContext(LikedContext);


  useEffect(() => {
    const fetchMeals = async () => {
      const mealsData = await Promise.all(
        Liked?.map(id =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data => data.meals[0])
            .catch(error => console.error(error)),
        ),
      );
      setMeals(mealsData);
    };

    fetchMeals();
  }, [Liked]);

  const renderItem = ({item: meal}) => (
    <ItemContainer>
      <ItemImage source={{uri: meal.strMealThumb}} />
      <View>
        <ItemTitle>{meal.strMeal}</ItemTitle>
        <ItemText>Category: {meal.strCategory}</ItemText>
        <ItemText>Area: {meal.strArea}</ItemText>
      </View>
    </ItemContainer>
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, []);
  return (
    <Container>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={meal => meal.idMeal}
      />
    </Container>
  );
}
