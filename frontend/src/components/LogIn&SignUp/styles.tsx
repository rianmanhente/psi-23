import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    marginTop: 48,
    display: "flex",
    justifyContent: 'space-around',
    flexDirection: "row",
    },   
    buttonLoginAndRegister: {
    width: 176,
    height: 48,
    backgroundColor: "#3E334E",
    borderRadius: 6,
    fontSize: 18,
    fontWeight: 700,
    border: 0,
    color: "white",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
    
    },
    buttonLogout: {
    width: 176,
    height: 48,
    backgroundColor: "#c6c6c6",
    color: "#615475",
    borderRadius: 6,
    fontSize: 18,
    fontWeight: 700,
    border: 0,
    display:"flex",
    alignItems: "center",
    justifyContent: "center"
    
    }
})


