import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CurvedHeader from "../../../Components/CurvedHeader";
import {styles} from '../Styles/dashboardHeader';

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


