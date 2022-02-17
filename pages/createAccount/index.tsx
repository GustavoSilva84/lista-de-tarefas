import { useRef } from "react";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { 
  Text, 
  TextInput
} from 'react-native';

import { 
  Input, 
  Label, 
  Icon,
  Form,
  ButtonBlack, 
  TextButtonBlack,
  ButtonTransparent,
  TextButtonTransparent
} from "../../components/StandardComponents";

import { View } from "./style";

export default function Login({ navigation }: NativeStackHeaderProps) {

  const RefInputEmail = useRef<TextInput>(null);
  const RefInputPassword = useRef<TextInput>(null);

  return (  
    <View>
      <Icon source={require("../../assets/myIcon.png")}/>

      <Form>
        <Label onPress={() => RefInputEmail?.current?.focus()}> E-Mail </Label>
        <Input ref={RefInputEmail}/>

        <Label onPress={() => RefInputPassword?.current?.focus()}> E-Mail </Label>
        <Input ref={RefInputPassword}/>

        <ButtonBlack onPress={() => navigation.navigate("createAccount")}> 
          <TextButtonBlack>  Criar conta </TextButtonBlack>
        </ButtonBlack>

        <ButtonTransparent onPress={() => navigation.navigate("login")}> 
          <TextButtonTransparent> Logar </TextButtonTransparent>
        </ButtonTransparent>
      </Form>
    </View>
  )

}