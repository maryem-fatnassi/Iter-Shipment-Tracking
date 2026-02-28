// import { Entypo, Feather, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import { Dimensions, LayoutAnimation, Platform, ScrollView, Text, TouchableOpacity, UIManager, View } from 'react-native';
// import {reusableStyle} from '../Screens/reusableStyle'
// import { styles } from '../CSSComponents/SideBar';

// if (Platform.OS === "android") {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }
// const SideBar = () => {
//     const iconsStyle = {
//         size:30,
//         color:'#fff',
//     }
//     const [expanded, setExpanded] = useState(false);
//     const toggleExpand = () => {
//      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//      setExpanded(!expanded);
//     };
//   return (
//     <ScrollView style={styles.container}>
//         <View style={[styles.sideBarContainer,expanded && { width: "85%" }]}>

//             <TouchableOpacity style={[styles.margin,styles.iconsBack]} onPress={toggleExpand}>
//                 <FontAwesome6 name="bars-staggered" size={iconsStyle.size} color={iconsStyle.color}/>
//             </TouchableOpacity>

//             <View style={styles.margin}>
//                  <TouchableOpacity style={styles.flex}>
//                 <Feather name="grid" size={iconsStyle.size} color={iconsStyle.color} />
//                 {expanded && <Text style={styles.text}>Dashboard</Text>}                
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.flex}>
//                 <Feather name="box" size={iconsStyle.size} color={iconsStyle.color}/>
//                 {expanded && <Text style={styles.text}>Shipments Management</Text>}                
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.flex}>
//                 <Entypo name="users" size={iconsStyle.size} color={iconsStyle.color}/>
//                 {expanded && <Text style={styles.text}>Drivers Management</Text>}                
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.flex}>
//                 <Ionicons name="create" size={iconsStyle.size} color={iconsStyle.color}/>
//                 {expanded && <Text style={styles.text}>Create Shipment</Text>}                
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.flex}>
//                 <FontAwesome5 name="map-marked-alt" size={iconsStyle.size} color={iconsStyle.color}/>
//                 {expanded && <Text style={styles.text}>Live Tracking Map</Text>}
//             </TouchableOpacity>
//             <TouchableOpacity style={[styles.flex,styles.logOut]}>
//                 <Entypo name="log-out"size={iconsStyle.size} color={iconsStyle.color} />
//                 {expanded && <Text style={styles.text}>Log-Out</Text>}
//             </TouchableOpacity>
//             </View>
//         </View>
//     </ScrollView>
//   )
// }

// export default SideBar;


// app/_layout.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";

const Drawer = createDrawerNavigator();

// Dummy screen just to render stack of Expo Router
const ScreenPlaceholder = ({ route }) => (
  <View style={styles.screen}>
    <Text style={styles.screenText}>{route.name}</Text>
  </View>
);

// Custom Drawer Content
function CustomDrawerContent(props) {
  const items = [
    { name: "dashboard", label: "Dashboard", icon: <MaterialIcons name="dashboard" size={22} color="#fff" /> },
    { name: "shipments", label: "Shipments Management", icon: <FontAwesome5 name="truck-moving" size={22} color="#fff" /> },
    { name: "drivers", label: "Drivers Management", icon: <Entypo name="user" size={22} color="#fff" /> },
    { name: "create-shipment", label: "Create Shipment", icon: <Feather name="plus-circle" size={22} color="#fff" /> },
    { name: "live-tracking", label: "Live Tracking Map", icon: <MaterialIcons name="map" size={22} color="#fff" /> },
    { name: "logout", label: "Log-Out", icon: <MaterialIcons name="logout" size={22} color="#fff" /> },
  ];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>ITER APP</Text>
      {items.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate(item.name)}
        >
          <View style={styles.iconContainer}>{item.icon}</View>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: "#1E3A8A", width: 250 },
        headerShown: true,
      }}
    >
      <Drawer.Screen name="dashboard" component={ScreenPlaceholder} />
      <Drawer.Screen name="shipments" component={ScreenPlaceholder} />
      <Drawer.Screen name="drivers" component={ScreenPlaceholder} />
      <Drawer.Screen name="create-shipment" component={ScreenPlaceholder} />
      <Drawer.Screen name="live-tracking" component={ScreenPlaceholder} />
      <Drawer.Screen name="logout" component={ScreenPlaceholder} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#1E3A8A",
  },
  drawerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  iconContainer: { marginRight: 15 },
  label: { color: "#fff", fontSize: 16, fontWeight: "500" },
  screen: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  screenText: { fontSize: 24, fontWeight: "bold" },
});