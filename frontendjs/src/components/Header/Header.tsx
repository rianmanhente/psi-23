import React, {useEffect, useState} from 'react';
import { ButtonPhoto, Container, EcommerceApp, LinksPopUp, PopUpContainer } from './styles';
import { AiOutlineAlignLeft } from "react-icons/ai"
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Header() {
    const [onPopUp, setOnPopUp] = useState(false);
    const [profilePhoto, setPerfilPhoto] = useState();

    const navigate = useNavigate();


    const handlePopUp = () => {
        setOnPopUp(!onPopUp);
      }

      useEffect(() => {

        const getUser = async () => {
          try {
            const res = await api.get("/User")
            const userData = res.data.user[0].image
            setPerfilPhoto(userData)
            console.log(userData)
          
          }catch(err){
            console.log(err)
          }
        }
  
        getUser()
        
      },[])

      function Miau() {
        toast.success('Miauu!, desconto de 10% em toda loja!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
      })
      }

    // useEffect(() => {
    //     try{

    //     }.catch(err)
    // })
    
  return (
    <header>
        <Container>
            <button style={{background: "transparent", border: "none"}} onClick={handlePopUp}>
            <AiOutlineAlignLeft size={40} color=''/>
            </button>
            <EcommerceApp>EcommerceApp</EcommerceApp>
        <div>
          <ButtonPhoto onClick={Miau}>
          {profilePhoto ? ( 
          <img style={{ width: 80, height: 40, borderRadius: 40}} src={profilePhoto} alt="" />
          ):null
          }
          </ButtonPhoto>
          </div>
        </Container>

        {onPopUp && (
          <PopUpContainer>
            <LinksPopUp onClick={() => navigate("/Home")}>
              Home
            </LinksPopUp>
            <LinksPopUp onClick={() => navigate("/Login")}  >
              Login
            </LinksPopUp>
            <LinksPopUp onClick={() => navigate("/")}>
              Register
            </LinksPopUp>
          </PopUpContainer>
        )}

    </header>
  );
}

export default Header;


