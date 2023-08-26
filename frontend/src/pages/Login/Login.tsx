import Header from '../../components/Header/Header';
import LoginAndRegister from '../../components/Login&SignUp/Login&SignUp';
import { Container, Form, Login, ContainerForm, LabelsForm, InputEmail, InputPassword  } from '../Register/style';

export default function LoginUser() {

  function oi() {
    console.log("oi")
  }

  return (
    <Container>
        
      <Header/>

      <ContainerForm>
      <Form>
          <Login>
            Login!
          </Login>
          <LabelsForm>
            Email
          </LabelsForm>
          <InputEmail/>
          <LabelsForm>
            Password
          </LabelsForm>
          <InputPassword/>
        <LoginAndRegister firstText={'Sign up'} secondText={'Logout'} onPressFunction={oi}/>
      </Form>
      </ContainerForm>

      
    </Container>
  );
}

