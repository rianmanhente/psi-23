import LoginUser from "./src/pages/Login/Login";
import Register from "./src/pages/Register/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="/" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginUser} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

