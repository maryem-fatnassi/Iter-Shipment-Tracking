import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CurvedHeader from "../../../Components/CurvedHeader";

export default function DashboardHeader({ userName = "Manager" }) {
  const firstLetter = userName.charAt(0).toUpperCase();

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View>
        <CurvedHeader height={180} curveHeight={60} color="#1E3A8A" />
        <View style={styles.topRow}>
          {/* Left Section */}
         <View>
             <Text style={styles.greeting}>Hello {userName}..👋</Text>
             <Text style={styles.date}>{formattedDate}</Text>
         </View>
         {/* Right Section */}
         <View style={styles.rightSection}>
              <TouchableOpacity style={styles.notification}>
                 <Ionicons name="notifications-outline" size={24} color="#fff" />
                 <View style={styles.badge} />
              </TouchableOpacity>

              <View style={styles.avatar}>
                 <Text style={styles.avatarText}>{firstLetter}</Text>
              </View>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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

