import { Drawer } from "expo-router/drawer";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from '../styles/layout'

function CustomDrawerContent(props) {
  const router = useRouter();

  const items = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: <MaterialIcons name="dashboard" size={22} color="#fff" />,
    },
    {
      name: "shipments",
      label: "Shipments Management",
      icon: <FontAwesome5 name="truck-moving" size={22} color="#fff" />,
    },
    {
      name: "drivers",
      label: "Drivers Management",
      icon: <Entypo name="user" size={22} color="#fff" />,
    },
    {
      name: "create-shipment",
      label: "Create Shipment",
      icon: <Feather name="plus-circle" size={22} color="#fff" />,
    },
    {
      name: "live-tracking",
      label: "Live Tracking Map",
      icon: <MaterialIcons name="map" size={22} color="#fff" />,
    },
    {
      name: "logout",
      label: "Log-Out",
      icon: <MaterialIcons name="logout" size={22} color="#fff" />,
    },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#1E3A8A",
        paddingTop: 40,
      }}
    >
      <View>
        <Image source={require("../assets/logo.png")}  />
      </View>

      <View >
        {items.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}
            onPress={() => router.push(`/${item.name}`)}
          >
            <View style={{ marginRight: 15 }}>{item.icon}</View>
            <Text style={{ color: "#fff", fontSize: 16 }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: "#1E3A8A",
          width: 260,
        },
      }}
    />
  );
}
