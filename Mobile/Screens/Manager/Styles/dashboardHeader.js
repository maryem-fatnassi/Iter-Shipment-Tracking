import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topRow: {
    width:'100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position:'absolute',
    top:50,
    paddingLeft:10,
    paddingRight:10
  },

  greeting: {
     color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 2,
  },

  date: {
    color: "#E0E7FF",
    fontSize: 13,
    paddingTop:5
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  notification: {
    marginRight: 15,
  },

  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FB923C", 
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FB923C",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
