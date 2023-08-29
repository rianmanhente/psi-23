import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginUser from "../../pages/Login/Login";


export default function Header() {

    const navigation = useNavigation();

    const [onPopUp, setOnPopUp] = useState(false);

    const handlePopUp = () => {
        setOnPopUp(!onPopUp);
      }

    const handleLogout = () => {
        // navigation.navigate();
    }

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    const handleLogin = () => {
        navigation.navigate('Login')

    }


    const handleHome = () => {
        navigation.navigate('Home')

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerFlex} >
            <TouchableOpacity onPress={handlePopUp}>
                    <FontAwesomeIcon icon={faBars} size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.logoName}>EcommerceApp</Text>
                <TouchableOpacity> 
                    <FontAwesomeIcon icon={faShoppingCart} size={30} color="white" />
                </TouchableOpacity>
            </View>

            {onPopUp && (
                <View style={styles.drawer}>
                    <View style={styles.closeButton}>
                        <TouchableOpacity onPress={handlePopUp}>
                            {onPopUp ? <FontAwesomeIcon icon={faTimes} size={30} color="white" /> : ""}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleHome}>
                                <Text style={styles.linkStyle}>Home</Text>
                            </TouchableOpacity>
                        <View style={styles.linksContainer}>
                            <TouchableOpacity onPress={handleRegister}>
                                <Text style={styles.linkStyle}>Registre-se</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleLogin}>
                                <Text style={styles.linkStyle}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleLogout}>
                                <Text style={styles.linkStyle}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}

                
        </View>
    );
  }
  