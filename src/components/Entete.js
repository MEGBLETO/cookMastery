import {View, Text, TextInput} from 'react-native';
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';
import React, { useState, useContext } from 'react';
import {HeaderContainer} from '../styles/Header.style';
import {StyledInput} from '../styles/Special.style';
import {SearchIcon} from '../styles/Header.style';
import {StyleTouchableOpacitybtn, StyledText} from '../styles/Welcome.style';
import {useNavigation} from '@react-navigation/native';
import InputContext from '../contexts/InputContext';

const Entete = () => {
  const navigation = useNavigation();
  const {input, setInput} = useContext(InputContext);


  const submitInput = () =>{
console.log(input)
  }

  return (
    <HeaderContainer>
      <StyledInput placeholder="Search...." onChangeText={text => setInput(text)}  value={input} />
      <SearchIcon color="black" size={30} onPress={()=>{submitInput()}} />
      <StyleTouchableOpacitybtn onPress={() => navigation.navigate('favorite')}>
        <StyledText>Favoris</StyledText>
      </StyleTouchableOpacitybtn>
    </HeaderContainer>
  );
};

export default Entete;
