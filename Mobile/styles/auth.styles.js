import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,               
    justifyContent: 'center',  
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 45,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    boxShadow:'0px 0px 4px silver',
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 7,
    marginBottom: 15,
    boxShadow:'0px 0px 4px silver',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '700',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    boxShadow:'0px 0px 4px silver',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  linkContainer : {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  link :{
    color:'blue',
    textDecorationLine:'underline',
    textDecorationColor:'blue'
  },
  pressable : {
    backgroundColor:'#1E3A8A',
    padding:12,
    borderRadius:8,
    boxShadow:'0px 0px 4px grey'
  },
  btnText : {
    color: "white",
    textAlign:'center' ,
    fontWeight:'bold',
    fontSize:17
  }

});