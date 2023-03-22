import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';

const CategoryBackground = styled(ImageBackground)`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CategoryText = styled(Text)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CategoryComponent = ({imageSource, category, onPress}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View>
        <CategoryBackground source={{uri: imageSource}}>
          <Overlay />
          <CategoryText>{category}</CategoryText>
        </CategoryBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CategoryComponent;
