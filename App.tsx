import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import Form from './src/components/Form';
import DisplayData from './src/components/DisplayData';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Form" component={Form} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="DisplayData" component={DisplayData} options={{ title: 'Exibição' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
