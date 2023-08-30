import React, { useState } from 'react';
import { DivContainer, EcommerceApp, Form, InputsForms,  InputsFormsPassword,  LabelsNames,  RegisterDiv, Subtitle  } from './styles';
import LoginAndRegister from '../../components/Buttons/Button';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    function handleLogUser(e : any) {
        e.preventDefault()
        const dataUser = {
            email: email,
            password: password
        }

        api.post("/login", dataUser)
        .then((res => {
        toast.success('Cadastrado com sucesso!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
        })
        navigate("/Home")
        }))
        .catch((error) => {
            toast.error(`Ocorreu um erro: ${error}`)
            console.log("nao cadastrou")
        })  
    }

    function Logout() {
        console.log("logout")
    }
  return (
    <>
    <DivContainer>
        <EcommerceApp>EcommerceApp</EcommerceApp>
    </DivContainer>
      <Form onSubmit={handleLogUser}>
        <Subtitle>Faça Login!</Subtitle>           
        <RegisterDiv>
        <LabelsNames>Email</LabelsNames>
            <InputsForms 
            required  
            pattern="^\S+@\S+$"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            type='email'
            />
        </RegisterDiv>
        <RegisterDiv>
        <LabelsNames>Senha</LabelsNames>
            <InputsFormsPassword 
            required  
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type='password'
            />
        </RegisterDiv>
        <LoginAndRegister firstText={'Login'} secondText={'Logout'} onClickFunction={Logout}/>
      </Form>
    </>

  );
}

export default Register;
