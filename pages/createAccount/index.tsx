import React from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function Login({ navigation }: NativeStackHeaderProps) {

  return (  
    <View>
      <Text> Create an account </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  )

}