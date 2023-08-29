import { styles} from "./styles";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

interface Buttons {
   firstText: string
   secondText: string
   onPressFunction: (e : any) => void
}


export default function LoginAndRegister({ firstText, secondText, onPressFunction } : Buttons) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressFunction}>
          <Text style={styles.buttonLoginAndRegister} >
              {firstText}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonLogout}>
              {secondText}
          </Text>
        </TouchableOpacity>
      </View>
    );
}
  