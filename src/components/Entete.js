import {View, Text, TextInput} from 'react-native';
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';
import React from 'react';
import {HeaderContainer} from '../styles/Header.style';
import {StyledInput} from '../styles/Special.style';
import {SearchIcon} from '../styles/Header.style';
import {StyleTouchableOpacitybtn, StyledText} from '../styles/Welcome.style';
import {useNavigation} from '@react-navigation/native';

const Entete = () => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <StyledInput placeholder="Search...." />
      <SearchIcon color="black" size={30} />
      <StyleTouchableOpacitybtn onPress={() => navigation.navigate('favorite')}>
        <StyledText>Favoris</StyledText>
      </StyleTouchableOpacitybtn>
    </HeaderContainer>
  );
};

export default Entete;
