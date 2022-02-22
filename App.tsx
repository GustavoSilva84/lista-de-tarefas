import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Login from "./pages/login/index";
import createAccount from "./pages/createAccount/index";
import Home from "./pages/home/index";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />

      <NavigationContainer>
        <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
          <Screen name="login" component={Login}/>
          <Screen name="createAccount" component={createAccount}/>
          <Screen name="home" component={Home}/>
        </Navigator>
      </NavigationContainer>
    </>
  );
}