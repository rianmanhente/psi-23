import React, { useState } from 'react';
import { DivContainer, EcommerceApp, Form, InputsForms,  LabelsNames,  RegisterDiv, Subtitle  } from './stylesregister';
import LoginAndRegister from '../../components/Buttons/Button';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    function handleCreateUser(e : any) {
        e.preventDefault()

        const dataUser = {
            name: name,
            email: email,
            password: password
        }

        api.post("/User", dataUser)
        .then((res => {
        console.log("cadastrou")
            toast.success('Cadastrado com sucesso!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
            })
            navigate('/Login');
            // navigate("/login")
        }))
        .catch((error) => {
            toast.error(`Ocorreu um erro: ${error}`)
            console.log("nao cadastrou")
            alert("Ocorreu um erro")
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
      <Form onSubmit={handleCreateUser}>
        <Subtitle>Cadastre-se</Subtitle>
        <RegisterDiv>
            <LabelsNames>Nome</LabelsNames>
            <InputsForms 
            required  
            pattern="^[A-Za-z]*$" 
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            type='text'
            />
        </RegisterDiv>
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
            <InputsForms 
            required  
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            type='password'
            />
        </RegisterDiv>
        <LoginAndRegister firstText={'Registre-se'} secondText={'Logout'} onClickFunction={Logout} />
      </Form>
    </>

  );
}

export default Register;
