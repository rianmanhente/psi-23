import { useScrollToTop } from '@react-navigation/native';
import LoginAndRegister from '../../components/Login&SignUp/Login&SignUp';
import { Container, Logo, Form, Subtittle, Tittle, Virtual, Login, ContainerForm, LabelsForm, InputEmail, InputName, InputPassword  } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Register() {

  // function oi(e : any) {
  //   e.preventDefault()
  //   console.log("oi")
  // }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const createUser = (e: any) => {

    const dataUser = new FormData();
    dataUser.append("name", name);
    dataUser.append("email", email);
    dataUser.append("password", password);
    dataUser.append("image", file);

  }

  return (
    <Container>
        <Logo>
        <Icon name="shopping-bag" size={24} color="#453B59" />
        <Tittle>
          EcommerceApp
        </Tittle>
        </Logo>
 
        <Subtittle>
          A new way to experince ecommerce in this
        </Subtittle>
        <Virtual>
        virtual space
        </Virtual>

      <ContainerForm>
      <Form>
          <Login>
            Register!
          </Login>
          <LabelsForm>
            Name
          </LabelsForm>
          <InputName value={name} onChange={(e : any) => setName(e.target.value)}/>
          <LabelsForm>
            Email
          </LabelsForm>
          <InputEmail value={email} onChange={(e : any) => setName(e.target.value)}/>
          <LabelsForm>
            Password
          </LabelsForm>
          <InputPassword value={password} onChange={(e : any) => setEmail(e.target.value)}/>
        <LoginAndRegister firstText={'Sign up'} secondText={'Logout'} onPressFunction={(e : any) => createUser(e)}/>
        </Form>
      </ContainerForm>
      
    </Container>
  );
}
