// import LoginAndRegister from '../../components/Login&SignUp/Login&SignUp';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'; 
import LoginAndRegister from '../../components/LogIn&SignUp/buttons';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';



export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const showToastSuccess = () => {
    // Duração em milissegundos
  };


const showErrorMessage = () => {
 
};

  const createUser = async (e: any) => {
  
    console.log(name)

    // console.log("Oi")    
    const dataUser = {
    name: name,
    email: email,
    password: password,

    }

    api.post("/User", dataUser)
    .then((res  => {
      Toast.show({
        type: "success",
        text1: "success ;)",
        text2:"Usuário cadastrado com sucesso",
        visibilityTime: 2500,
        position: 'top',
        topOffset: 20,
      })
      navigation.navigate('Login')
    }))
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: "error ;(",
        text2:"Ocorreu um erro tente novamente",
        visibilityTime: 2500,
        position: 'top',
        topOffset: 20,
      })
    })



  }

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Text style={styles.title}>
                EcommerceApp
            </Text>
        </View>

        <Text style={styles.subtitle}>
        Uma nova forma de comprar online
        </Text>

        <View style={styles.containerForm}>
            <View style={styles.divForm}>
            <Text style={styles.register}>
                Registre-se!
            </Text>
            <Text style={styles.labelsForm}>
                Nome
            </Text>
            <TextInput 
            style={styles.input}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            />
            <Text style={styles.labelsForm}>
                Email
            </Text>
            <TextInput 
            style={styles.input}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)} 
            />
            <Text style={styles.labelsForm}>
                Senha
            </Text>
            <TextInput 
            style={styles.input}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
             />
            <LoginAndRegister firstText={'Registre-se'} secondText={'Logout'} onPressFunction={(e : any) => createUser(e)}/>
            </View>
        </View>


    </View>


  );
}


