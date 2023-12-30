import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { useColorScheme } from 'react-native';
import { colors } from './src/styles/general';

const DarkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: colors.primary.soft,
    card: 'rgb(18, 18, 18)',
    text: '#FFFFFF',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)'
  }
}
export default function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigation />
    </NavigationContainer>
  )
}