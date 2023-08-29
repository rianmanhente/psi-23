import Register from "./src/pages/Register/Register";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/pages/Login/Login";
import Toast from 'react-native-toast-message';
import Home from "./src/pages/Home/Home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}  />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} /> 
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} /> 
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
}

export default App;

// import Register from "./src/pages/Register/Register";
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from "./src/pages/Login/Login";
// import Toast from 'react-native-toast-message';
// import Home from "./src/pages/Home/Home";


// function App() {
//   return (
//     <Home/>
//   );
// }

// export default App;


