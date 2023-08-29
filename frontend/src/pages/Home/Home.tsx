// import LoginAndRegister from '../../components/Login&SignUp/Login&SignUp';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { styles } from './styles'; 
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import Product from '../../utils/Products'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import * as ImagePicker from 'expo-image-picker';

export default function Home() {

    const [userPhoto, setUserPhoto] = useState()
    const [userName, setuserName] = useState();
    const [products, setProducts] = useState<Product[]>([]);
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productFile, setProductFile] = useState('');
    const [productsImages, setProductsImages] = useState([]);

    useEffect(() => {
        const getUserData =  async () => {
            try{    

                const res = await api.get("/User")
                const userDataName = res.data.user[0].name
                const userDataPhoto = res.data.user[0].image

                setUserPhoto(userDataPhoto)
                setuserName(userDataName)
                console.log(userDataPhoto)

            }catch(err) {
                console.log(err)
            }
        }
        getUserData()

        const getProducts =  async () => {
          try{    

              const res = await api.get("/Product")
              const products= res.data.Products
              setProducts(products)
              console.log(products)

              const productsImages = products.map((product: { image: any; }) => product.image); 
              setProductsImages(productsImages);
              console.log(productsImages)


          }catch(err) {
              console.log(err)
          }
      }
      getProducts()
    }, [])

    const handleChooseImage = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        console.log('Permission to access camera roll is required!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;
        setProductFile(selectedImage)
      }
    };
  

    const handlePostProducts = async () => {
      try {
        const dataProducts = new FormData();
        dataProducts.append("name", productName);
        dataProducts.append("price", productPrice);
        dataProducts.append("category", productCategory);

        if (productFile) {
          const response = await fetch(productFile);
          const blob = await response.blob();
    
          dataProducts.append('image', blob, 'image.jpg');
        }
        
        const response = await api.post('/Product', dataProducts);
        console.log('foi man')
      } catch (error) {
        // Handle error
      }
    };

    const imagesProducts = products.map((product) => {
      return {
        ...product, // Mantém todos os campos originais do produto
        image: require(`../../../../backend/src/uploads/${product.image}`)
      };
    });
      
  return (
    <View style={styles.container}>
       <Header/>

        <View style={{marginTop: 20,display: "flex", justifyContent: "", alignItems: "center", flexDirection: "row", gap: 16, marginLeft: 20}}>
        {userPhoto ? (
          <Image source={{ uri: userPhoto }} style={styles.userPhoto} /> 
        ) : (
          null
        )}
        <Text style={{fontSize: 20, color: "purple"}}>Olá {userName} seja bem vindo!</Text>

        <View style={styles.container}>
     
       
     </View>
     
    </View>

    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 20, marginTop: 40}}>
    {products.map(({name, price, image, category}, index: Product) => (
      <View key={index}>
        <View style={styles.cards}>
          <Image source={require(`../../../../backend/src/uploads/${image}`)} />
          <Text>{name}</Text>
          <Text>{price}</Text>
          <Text>{category}</Text>
        </View>
      </View>
    ))}
    </View>


      <View style={styles.containerForm}>
      <View style={styles.divForm}>
      <Text style={{color: "purple", fontSize: 20, textAlign: "center"}}>Cadastre um produto!</Text>
      <Text style={styles.labelsForm}>
                Nome do produto
            </Text>
            <TextInput 
            style={styles.input}
            value={productName}
            onChange={(e: any) => setProductName(e.target.value)} 
            />
             <Text style={styles.labelsForm}>
              preço
            </Text>
            <TextInput 
            style={styles.input}
            value={productPrice}
            onChange={(e: any) => setProductPrice(e.target.value)} 
            />
             <Text style={styles.labelsForm}>
                Categoria do produto
            </Text>
            <TextInput 
            style={styles.input}
            value={productCategory}
            onChange={(e: any) => setProductCategory(e.target.value)} 
            />
             <Text style={styles.labelsFormFile}>
              Selecione a imagem do seu Produto!
            </Text>
            {/* <TextInput 
            
            style={styles.input}
            value={productFile}
            onChange={(e: any) => setProductFile(e.target.value)} 
            />   */}
        <TouchableOpacity style={styles.buttonChooseImage} onPress={handleChooseImage}>
          <Text style={styles.buttonText}>Imagem do produto</Text>
        </TouchableOpacity>
    </View>

    
    <View style={styles.container}>
        <TouchableOpacity style={styles.postProduct} onPress={handlePostProducts}>
          <Text style={styles.buttonHome}>
            Cadastrar Produto!
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>


  );
}


