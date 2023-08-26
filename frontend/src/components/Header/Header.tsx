import { CartButton, Container, Header, LogoName, MenuHamburguerButton } from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
    return (
        <Header>
            <Container>
                <MenuHamburguerButton>
                    <Icon name="bars" size={26} color="#fff" />
                </MenuHamburguerButton>
                <LogoName>EcommerceApp</LogoName>
                <CartButton>
                    <Icon name="cart-arrow-down" size={26} color="#fff" />
                </CartButton>
            </Container>
        </Header>
    );
  }
  