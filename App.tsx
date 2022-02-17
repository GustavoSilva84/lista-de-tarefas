import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./pages/login/index";
import createAccount from "./pages/createAccount/index";


export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Screen name="login" component={Login}/>
        <Screen name="createAccount" component={createAccount} />
      </Navigator>
    </NavigationContainer>
  );
}