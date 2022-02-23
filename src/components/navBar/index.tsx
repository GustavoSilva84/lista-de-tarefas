import { 
  View,
  Img
} from "./style";

import { 
  TouchableOpacity
} from 'react-native';

export default function NavBar() {
  return (
    <View>

      <TouchableOpacity>
        <Img style={{resizeMode: 'contain'}} source={require("./img/most.png")}/>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Img style={{resizeMode: 'contain'}} source={require("./img/list.png")}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Img style={{resizeMode: 'contain'}} source={require("./img/user.png")}/>
      </TouchableOpacity>

    </View>
  )
}