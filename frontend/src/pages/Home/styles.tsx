import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    backgroundColor: "#fff",
    flex: 1
    },
    logo: {
    marginTop: 48,
    display: 'flex',
    alignItems: "center",
    marginLeft: 2,
    gap: 2

    },
    title: {
    fontSize: 26,
    color: "#8b77aa"
    },
    subtitle: {
    color: "gray",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center"
    },
    password: {
    color: "gray",
    fontSize: 18,
    marginTop: 40,
    textAlign: "center"
    },
    containerForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    },
    divForm: {
    marginTop: 40,
    width: 400,
    },
    register: {
    color: "#8b77aa",
    fontSize: 20,
    },
    labelsForm: {
    fontSize: 20,
    color: "#8b77aa",
    marginTop: 20   
    },
    labelsFormFile: {
        fontSize: 20,
        color: "#8b77aa",
        marginTop: 40 
    },
    buttonChooseImage: {
    height: 48,
    backgroundColor:  "#3E334E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 20
    },
    buttonText: {
    color: "white",
    fontSize: 20
    },
    input: {
    marginTop: 16,
    backgroundColor: "transparent",
    height: 41.6,
    borderWidth: 2,
    borderColor: "#e0dede",
    borderRadius: 8,
    width: 400,
    outlineWidth: 0
    
    },   
    userPhoto: {
    width: 48,
    height: 48,
    borderRadius: 20
    } ,
    appIntroSlider: {
    width: "40%",
    height: 40,
    backgroundColor: "black"
    },
    cards: {
    width: 100,
    height: 80,
    padding: 10,
    // backgroundColor: "pink",
    flexBasis: "30%", // Define a largura de cada item para criar 3 colunas
    marginBottom: 20

    },
    postProduct: {
    marginTop: 20,
    width: 400,
    height: 48,
    backgroundColor: "#3E334E",
    borderRadius: 6,
    border: 0,
    color: "white",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
        
    },
    buttonHome: {
    color: "white",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: 700,
    }
    
})

