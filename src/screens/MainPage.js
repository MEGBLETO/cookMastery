import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PagecontainerWhite} from '../styles/Welcome.style';
import Entete from '../components/Entete';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import customCategorie from '../Data/customCategorie.json'
import CategoryComponent from '../components/CategoryComponent';

const MainPage = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, []);

 

  return (
    <SafeAreaView>
      <PagecontainerWhite>
        {/* <Entete /> */}
        <ScrollView>
            {customCategorie?.map((item)=>(
                <CategoryComponent key={item.strCategory} onPress={()=> navigation.navigate('browse', {category: item.strCategory})} category={item.strCategory} imageSource={item.imgUrl}/>
            ))}
        </ScrollView>
      </PagecontainerWhite>
    </SafeAreaView>
  );
};

export default MainPage;
