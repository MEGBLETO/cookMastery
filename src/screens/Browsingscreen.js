import React, {useState, useEffect, useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import styled from 'styled-components/native';
import Entete from '../components/Entete';
import { MealList, MealItem, MealImage, MealTitle, LoadingIndicator } from '../styles/Browsing.style';
import InputContext from '../contexts/InputContext';

const Browsingscreen = () => {
  const router = useRoute();
  const navigation = useNavigation();
  const category = router.params?.category;
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const {input, setInput} = useContext(InputContext);



  const getProductBasedOnCategories = async () => {
    try {
      if (category) {
        const {data} = await axios.get(
          `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        );
        setMeals(data.meals);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearched = async() =>{
    try {
          if(input != null){
            const {data} = await axios.get(
                `https://themealdb.com/api/json/v1/1/search.php?s=${input}`
              );
              setMeals(data.meals);
          }
    } catch (error) {
        console.log(error)
    }
}

  useEffect(()=>{
         getSearched()
  },[input])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
    setIsLoading(true);
    getProductBasedOnCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <MealItem
        onPress={() => navigation.navigate('details', {id: item.idMeal})}>
        <MealImage source={{uri: item.strMealThumb}} />
        <MealTitle>{item.strMeal}</MealTitle>
      </MealItem>
    );
  };

  return (
    <SafeAreaView>
      <Entete />

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <MealList
          data={meals}
          renderItem={renderItem}
          keyExtractor={item => item.idMeal}
          numColumns={3}
        />
      )}
    </SafeAreaView>
  );
};

export default Browsingscreen;
