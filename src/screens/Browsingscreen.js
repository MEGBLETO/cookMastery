import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Entete from '../components/Entete';

const Browsingscreen = () => {
  const router = useRoute();
  const navigation = useNavigation();
  const category = router.params?.category;
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);

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

const PagecontainerWhite = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MealList = styled(FlatList)`
  padding: 10px;
  background-color: #36454F	;
`;

const MealItem = styled.TouchableOpacity`
  flex: 1;
  margin: 5px;
  height: 200px;
`;

const MealImage = styled.Image`
  height: 150px;
  width: 100%;
  border-radius: 10px;
`;

const MealTitle = styled.Text`
  font-size: 10px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;

const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'blue',
})``;

export default Browsingscreen;
