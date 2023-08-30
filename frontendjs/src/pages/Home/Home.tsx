import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import api from '../../services/api';
import { CarouselDiv, Form, InputProduct, InputsForms, LabelProduct, LabelsNames, MainContent, ProductName, RegisterDiv, Subtitle } from './styles';
import { motion } from "framer-motion";
import { Product } from '../../utils/Products';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import LoginAndRegister from '../../components/Buttons/Button';
import { toast } from 'react-toastify';



function Home() {

const [products, setProducts] = useState<Product[]>([]);
const [favorites, setFavorites] = useState<String[]>([]);
const [productName, setProductName] = useState('');
const [productPrice, setProductPrice] = useState('');
const [productCategory, setProductCategory] = useState("");
const [productFile, setProductFile] = useState('');


console.log(productFile)
console.log(productName)

  useEffect(() => {
    const getProducts = async () => {
        try {
          const res = await api.get("/Product")
          const products = res.data.Products
          console.log(products)
          setProducts(products)
        }catch(err) {
          console.log(err)
        }
      }

      getProducts()
  },[])

  function handleCreateProduct(e : any) {
    e.preventDefault()

    const dataProduct = new FormData()
    dataProduct.append("name", productName)
    dataProduct.append("price", productPrice)
    dataProduct.append("category", productCategory)
    dataProduct.append("image", productFile)

    api.post("/Product", dataProduct)
    .then((res => {
    console.log("cadastrou")
        toast.success('Produto Cadastrado com sucesso!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
        })
        // navigate("/")
    }))
    .catch((error) => {
        toast.error(`Ocorreu um erro: ${error}`)
        console.log("nao cadastrou")
    })
    
  }

  const handleFileInputChange = (e : any) => {
    const file = e.target.files[0]
    console.log(file)
    setProductFile(file);
  };


const carousel = useRef<any>();
const [width, setWidth] = useState(0);

const handleFavorites = (id : string) => {
  
  const isFavorites = favorites.includes(id)  

  if(isFavorites) {
    setFavorites(favorites.filter(productId => productId !== id));
  } else {
    setFavorites([...favorites, id])
  }
  
};

useEffect(() => {
  // console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
  setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
}, []);

function Logout() {
  console.log("logout")
}


  return (
    <>
      <Header/>    
      <MainContent>

      <div>
          <motion.div
            ref={carousel}
            className="overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              // className="flex gap-[40px]"
              style={{display: "flex", gap: 18}}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >

        {products.map(({name, price, category, id, image}) => (
          <>
            <CarouselDiv>
              <div>
                <button style={{background: "transparent", borderWidth: 0}} onClick={() => handleFavorites(id)}>
                  {favorites.includes(id) ? (
                    <AiFillHeart size={24} color='pink'/>
                  ) : (
                    <AiOutlineHeart size={24} color='white'/>
                  )}
                </button>
              </div>
              <div>
              <img 
              style={{ marginTop: 12, padding: 6, width: 140}}
              src={require(`../../../../backend/src/uploads/${image}`)}
              alt=""
               />
               <ProductName>{name}</ProductName>
               <ProductName>{price}</ProductName>
               <ProductName>{category}</ProductName>
              </div>
            </CarouselDiv>

          </> 
        ))}
        </motion.div>
        </motion.div>
        </div>
        
        <Form onSubmit={handleCreateProduct}>
        <Subtitle>Cadastre seu Produto!</Subtitle>
        <RegisterDiv>
            <LabelsNames>Nome do produto:</LabelsNames>
            <InputsForms 
            required  
            value={productName}
            onChange={(e: any) => setProductName(e.target.value)}
            type='text'
            />
        </RegisterDiv>
        <RegisterDiv>
        <LabelsNames>Preço do produto</LabelsNames>
            <InputsForms 
            required  
            value={productPrice}
            onChange={(e: any) => setProductPrice(e.target.value)}
            type='text'
            />
        </RegisterDiv>
        <RegisterDiv>
        <LabelsNames>Categoria:</LabelsNames>
            <InputsForms 
            required  
            value={productCategory}
            onChange={(e: any) => setProductCategory(e.target.value)}
            type='text'
            />
        </RegisterDiv>
        <LabelProduct>Foto do produto:</LabelProduct>
            <InputProduct 
            required  
            type='file' 
            placeholder='foto do produto'
            // value={productFile}
            // onChange={(e:any) => setProductFile(e.target.value)}1
            onChange={handleFileInputChange}
            />
        <LoginAndRegister firstText={'Cadastre!'} secondText={'Logout'} onClickFunction={Logout} />
      </Form>

      </MainContent>
    </>

  );
}

export default Home;
