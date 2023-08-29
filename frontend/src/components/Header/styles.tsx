import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    backgroundColor: "#aa57aa",
    height: 80,
    minWidth: 414, 
    zIndex: 100,

    },   
    containerFlex: {
    display: "flex" ,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 20,
    
    },
    menuHamburguer: {
    backgroundColor: "transparent",
    border: "none"
    },
    logoName: {
    color: "white",
    fontSize: 20
    },
    drawer: {
    backgroundColor: "#c967d6",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    position: "absolute",
    left: 0,
    // marginTop: 100,
    width: 200,
    height: 1100
    },
    closeButton: {
    marginLeft: 34,
    marginTop: 17,
    },
    linksContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 20

    },
    linkStyle: {
    color: "white",
    marginTop: 16,
    fontSize: 20
    }

})
