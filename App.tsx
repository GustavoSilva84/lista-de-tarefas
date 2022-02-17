import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';


import Login from "./pages/login/index";
import createAccount from "./pages/createAccount/index";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="login">
        <Screen name="login" component={Login} />
        <Screen name="createAccount" component={createAccount} />
      </Navigator>
    </NavigationContainer>
  );
}