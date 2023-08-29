import { View, Text, TextInput } from 'react-native';
import LoginAndRegister from '../../components/LogIn&SignUp/buttons';
import { styles } from './styles'; 
import Header from '../../components/Header/Header';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();


  const dataUser = {
    email: email,
    password: password,

  }

  const LogUser = (e : any) => {
    e.preventDefault()

    api.post('/login', dataUser).then((res) => {
      Toast.show({
        type: "success",
        text1: "success ;)",
        text2:"Usuário cadastrado com sucesso",
        visibilityTime: 2500,
        position: 'top',
        topOffset: 20,
      })
      navigation.navigate('Home')
      // toast.success("Logado com sucesso!")
  })
  .catch((error) => {
      if(error.response.status === 401) {
        Toast.show({
          type: "error",
          text1: "error ;(",
          text2:"Senha ou emails incorretos",
          visibilityTime: 2500,
          position: 'top',
          topOffset: 20,
        })
        //  toast.error("Senha ou email incorretos")
        // alert("senhas ou email incorretos")
      } else {
          Toast.show({
            type: "error",
            text1: "error ;(",
            text2:"Ocorreu um erro tente novamente",
            visibilityTime: 2500,
            position: 'top',
            topOffset: 20,
          })
      }
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
                Faça login na plataforma!
            </Text>
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
            <LoginAndRegister firstText={'Login!'} secondText={'Logout'} onPressFunction={(e : any) => LogUser(e)}/>
            </View>
            <Text style={styles.password}>
                esqueceu sua senha?
            </Text>
      </View>
    </View>
   
  );
}
