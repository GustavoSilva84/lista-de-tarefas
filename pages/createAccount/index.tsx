import { useRef, useEffect, useState } from "react";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { 
  Vibration, 
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
} from "./../../styles/StandardComponents";

import { View } from "./style";

export default function Login({ navigation }: NativeStackHeaderProps) {

  const RefInputEmail = useRef<TextInput>(null);
  const RefInputPassword = useRef<TextInput>(null);
  const [valueEmail, setValueEmail] = useState<string>("");
  const [valuePassword, setValuePassword]  = useState<string>("");

  useEffect(() => {

    if(valueEmail) {
      RefInputEmail?.current?.setNativeProps({ borderWidth: 0 });
    }

    if(valuePassword) {
      RefInputPassword?.current?.setNativeProps({ borderWidth: 0 });
    }

  }, [valueEmail, valuePassword])

  function logInto() {

    if(!valueEmail?.trim()) {
      RefInputEmail?.current?.setNativeProps({ borderWidth: 1 });
      RefInputEmail?.current?.focus();
      Vibration.vibrate(200, true);
      return
    }

    if(!valuePassword?.trim()) {
      RefInputPassword?.current?.setNativeProps({ borderWidth: 1 });
      RefInputPassword?.current?.focus();
      Vibration.vibrate(200, true);
      return
    }

    navigation.navigate("home");

  }
  return (  
    <View>
      <Icon source={require("../../assets/myIcon.png")}/>

      <Form>
        <Label onPress={() => RefInputEmail?.current?.focus()}> E-Mail </Label>
        <Input onChangeText={(value: string) => setValueEmail(value)} ref={RefInputEmail}/>

        <Label onPress={() => RefInputPassword?.current?.focus()}> Senha </Label>
        <Input  onChangeText={(value: string) => setValuePassword(value)} ref={RefInputPassword}/>

        <ButtonBlack onPress={() => logInto()}> 
          <TextButtonBlack>  Criar conta </TextButtonBlack>
        </ButtonBlack>

        <ButtonTransparent onPress={() => navigation.navigate("login")}> 
          <TextButtonTransparent> Logar </TextButtonTransparent>
        </ButtonTransparent>
      </Form>
    </View>
  )

}