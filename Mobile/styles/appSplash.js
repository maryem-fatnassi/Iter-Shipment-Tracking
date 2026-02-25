import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex:0,
    position:'relative'
  },
  logo :{
    width: 190,
    height: 190, 
    position:'absolute',
    top:0,
    left:0,
    zIndex:10 
  },
  logoContainer: {
    zIndex:3
  },
  title: {
    textAlign:"center",
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 3,
    marginTop: 10,
    marginBottom:20,
    zIndex:2,
    fontStyle:"italic"
  },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    marginTop: 5,
    letterSpacing: 1,
    marginTop:10,
    marginBottom:25
  },
  lottie: {
    width: 200,
    height: 200,
    marginTop: -20,
    zIndex:0
  },
  progressBar: {
    position:'absolute',
    bottom:60,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#FDBA74", 
  },
});