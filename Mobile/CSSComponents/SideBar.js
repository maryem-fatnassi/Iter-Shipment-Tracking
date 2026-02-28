import { StyleSheet } from "react-native";
import { reusableStyle } from "../Screens/reusableStyle";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#BDBDBD',
    },
    sideBarContainer:{
        backgroundColor:'#1E3A8A',
        width:'98',
        
        paddingLeft:30,
        paddingTop:30
    },
    margin:{
        marginTop:40
    },
    flex:{
        flexDirection:'row',
        marginTop:40,
    },
    text:{
        color:'#fff',
        fontSize:18,
        marginLeft:20,
        fontWeight:'bold',
    },
    logOut:{
        marginTop:140,
        paddingBottom:60
    },
    iconsBack:{
        backgroundColor:'#FB923C',
        width:48,
        height:48,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }

})