import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Movie from './src/screens/Movie';
import MovieDetail from './src/screens/MovieDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Movie" component={Movie} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="Movie Detail" component={MovieDetail} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

