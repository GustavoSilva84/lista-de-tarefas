import { useRef } from "react";
import { Text, View, Button, TextInput } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function Login({ navigation }: NativeStackHeaderProps) {

  const RefInputEmail = useRef<HTMLInputElement>();
  const RefInputPassword = useRef<HTMLInputElement>();

  return (  
    <View>
      <Text> Login </Text>

      <Text onPress={() => RefInputEmail?.current?.focus()}> E-Mail </Text>
      <TextInput ref={RefInputEmail || null} style={{ borderWidth: 1, marginBottom: 5 }}/>

      <Text onPress={() => RefInputPassword?.current?.focus()}> E-Mail </Text>
      <TextInput ref={RefInputPassword} style={{ borderWidth: 1, marginBottom: 5 }}/>

      <Button
        title="Create an account"
        onPress={() => navigation.navigate("createAccount")}
      />
    </View>
  )

}