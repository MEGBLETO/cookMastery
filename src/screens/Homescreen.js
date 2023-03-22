import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import bgimage from '../assets/bg.jpg';
import {SafeAreaView} from 'react-native-safe-area-context';

// import {Pagecontainer} from '../styles/Pagecontainer.style';
// import {StyledImageBackground} from '../styles/ImageBackground.style'
import {
  StyleTouchableOpacity,
  MessageContainer,
  StyledWelcomeText,
  StyledImageBackground,
  StyleTouchableIcon,
  PagecontainerGray,
} from '../styles/Welcome.style';
import { ChevronDoubleRightIcon } from 'react-native-heroicons/solid';

const Homescreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <PagecontainerGray>
        <StyledImageBackground source={bgimage}>
          <MessageContainer>
            <StyledWelcomeText>
              Explore fresh, home-cooked meals with our receipt gallery app.
              Browse, save, and organize your favorite recipes.
            </StyledWelcomeText>
          </MessageContainer>

          <StyleTouchableIcon onPress={() => navigation.navigate('main')}>
              <ChevronDoubleRightIcon size={20}/>
          </StyleTouchableIcon>
        </StyledImageBackground>
      </PagecontainerGray>
    </SafeAreaView>
  );
};

export default Homescreen;
