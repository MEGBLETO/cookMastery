import {TextInput, View} from 'react-native';
import styled from 'styled-components';
import {MagnifyingGlassCircleIcon} from 'react-native-heroicons/solid';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px;
  font-weight: bold;
  height: 70px;
  width: 100%;
  background-color: #36454F	;
`;

export const SearchIcon = styled(MagnifyingGlassCircleIcon)`
  position: absolute;
  top: 20px;
  right:  22%;
`;
