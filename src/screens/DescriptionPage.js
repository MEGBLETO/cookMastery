import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useRoute, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {StyledHeartIcon} from '../styles/Welcome.style';
import LikedContext from '../contexts/Likecontext';
import { Instructions, Container, Header, IngredientsContainer, IngredientsHeader, IngredientItem, HeaderText } from '../styles/Description.style';




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
             <HeaderText>{meal?.strMeal}</HeaderText> 
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
