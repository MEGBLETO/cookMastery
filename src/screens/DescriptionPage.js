import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {StyledHeartIcon} from '../styles/Welcome.style';
import LikedContext from '../contexts/Likecontext';

const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: #36454f;
`;

const Header = styled.Text`
  display: flex;
  place-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

const Instructions = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  color: white;
`;

const IngredientsContainer = styled.View`
  margin-top: 20px;
`;

const IngredientsHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

const IngredientItem = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: white;
`;

const DescriptionPage = () => {
  const navigation = useNavigation();
  const {Liked, likePost} = useContext(LikedContext);
  const [clicked, setClicked] = useState(false);

  const route = useRoute();
  const receiptId = route.params.id;
  const [meal, setMeal] = useState(null);

  const fetchMealDetails = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${receiptId}`,
    );
    setMeal(response.data.meals[0]);
  };

  const handleLikePress = receiptId => {
    likePost(receiptId);
    setClicked(clicked => !clicked);
  };

  useEffect(() => {
    console.log(Liked);
  }, [Liked]);

  useEffect(() => {
    fetchMealDetails();
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, [navigation, receiptId]);

  const renderIngredients = ({item}) => (
    <IngredientItem>
      {item.ingredient} - {item.measure}
    </IngredientItem>
  );

  const ingredients = [];

  if (meal) {
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push({
          key: `ingredient-${i}`,
          ingredient: meal[`strIngredient${i}`],
          measure: meal[`strMeasure${i}`],
        });
      }
    }
  }

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <Header>
              {meal?.strMeal}
              {clicked ? (
                <StyledHeartIcon
                  name="heart"
                  size={30}
                  color={'red'}
                  onPress={() => handleLikePress(meal?.idMeal)}
                />
              ) : (
                <StyledHeartIcon
                  name="heart"
                  size={30}
                  color={'white'}
                  onPress={() => handleLikePress(meal?.idMeal)}
                />
              )}
            </Header>
            <Image
              source={{uri: meal?.strMealThumb}}
              style={{width: '100%', height: 200}}
            />
            <Instructions>{meal?.strInstructions}</Instructions>
            <IngredientsContainer>
              <IngredientsHeader>Ingredients:</IngredientsHeader>
            </IngredientsContainer>
          </>
        }
        data={ingredients}
        renderItem={renderIngredients}
        keyExtractor={item => item.key}
      />
    </Container>
  );
};

export default DescriptionPage;
