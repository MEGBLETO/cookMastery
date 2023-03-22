import styled from 'styled-components/native';
import {TouchableOpacity, ImageBackground} from 'react-native';
import {ChevronRightIcon, HeartIcon} from 'react-native-heroicons/solid';



export const StyledImageBackground = styled(ImageBackground)`
  display: flex;
  flex: 1;
  justify-content: center;
  place-items: center;
`;

export const PagecontainerGray = styled.View`
  min-height: 100%;
  width: 100%;
  background-color: gray;
`;


export const PagecontainerWhite = styled.View`
  min-height: 100%;
  width: 100%;
  background-color: White;
`;

export const MessageContainer = styled.View`
  display: flex;
  align-items: center;
  color: white;
  min-height: 400px;
  width: 100%;
`;

export const StyledWelcomeText = styled.Text`
  display: flex;
  margin-left: 10px;
  align-self: flex-start;
  font-family: 'Courier New';
  font-weight: bold;
  flex-wrap: wrap;
  width: 300px;
  color: white;
  font-size: 30px;
`;

export const StyleTouchableOpacity = styled(TouchableOpacity)`
  align-self: center;
  width: 100px;
  background-color: #fceea7;
  padding: 50px;
  border-radius: 9999px;
`;

export const styledIcon = styled(ChevronRightIcon)`
  color: black;
`;

export const StyleTouchableIcon = styled(StyleTouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;


export const StyleTouchableOpacitybtn = styled(TouchableOpacity)`
  position: absolute;
  top: -34px;
  right: -20px;
  align-self: center;
  width: 30px;
  height: 30px;
  background-color: #B2BEB5		;
  padding: 50px;
  border-radius: 9999px;
`;


export const StyledText = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
`;


export const StyledHeartIcon = styled(HeartIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
`;