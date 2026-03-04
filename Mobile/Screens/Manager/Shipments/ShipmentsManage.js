import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { reusableStyle } from "../../reusableStyle";
import { router } from "expo-router";
import { styles } from "../Styles/shipmentsManage";

const shipments = [
  { id: "001", originCity: "Tunis",destinationCity:"Gabes", date: "24 Feb 2026", status: "Delivered", driver: "Mohamed Salah" , orderCount : 20},
  { id: "002", originCity: "Nabeul",destinationCity:"Djerba", date: "26 Feb 2026", status: "Pending" ,driver: "Ahmed Ben Ali" ,orderCount : 20},
  { id: "003", originCity: "Kasr Hlel",destinationCity:"Djerba", date: "27 Feb 2026", status: "Delayed", driver: "Youssef Trabelsi" ,orderCount : 20 },
  { id: "004", originCity: "Nabeul",destinationCity:"Djerba", date: "26 Feb 2026", status: "Pending" ,driver: "Ali Trabelsi" ,orderCount : 20},
  { id: "005", originCity: "Kasr Hlel",destinationCity:"Djerba", date: "27 Feb 2026", status: "Delayed" ,driver: "Mohamed Salah", orderCount : 20},
];

export default function ShipmentsManagement() {
    const [search, setSearch] = useState("");
    const delayedCount = shipments.filter(s => s.status === "Delayed").length;
    const filteredShipments = shipments.filter(item =>
    item.id.toLowerCase().includes(search.toLowerCase()) ||
    item.city.toLowerCase().includes(search.toLowerCase())
);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "#22C55E";
      case "Pending":
        return "#F59E0B";
      case "Delayed":
        return "#EF4444";
      default:
        return "#3B82F6";
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Shipments Management</Text>
        {/* <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity> */}
      </View>

      {/* STATS CARDS */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.statsRow}>
          <StatCard icon="cube-outline" title="Total" value="245" color="#1E3A8A" />
          <StatCard icon="checkmark-circle-outline" title="Delivered" value="180" color="#22C55E" />
          <StatCard icon="time-outline" title="Pending" value="40" color="#F59E0B" />
          <StatCard icon="alert-circle-outline" title="Delayed" value="25" color="#EF4444" />
        </View>
      </ScrollView>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color='#fff'/>
        <TextInput
  placeholder="Search shipments by ID or city.."
  placeholderTextColor="#fff"
  style={styles.searchInput}
  value={search}
  onChangeText={setSearch}
/>
      </View>

      {/* SHIPMENTS LIST */}
      <View style={{ marginTop: 10 }}>
        {filteredShipments.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} >
            <View>
              <Text style={styles.tracking}>#SH{item.id}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.city}>{item.originCity} → </Text>
                <Text style={styles.city}>{item.destinationCity}</Text>
              </View>
              <Text style={styles.date}>{item.date}</Text>
              <View style={{marginTop:15,}}>
                <Text><Text style={{fontWeight:'bold',fontSize:16,color:'#1E3A8A'}}>Driver : </Text>{item.driver}</Text>
                <Text style={{marginTop:5,fontWeight:'600'}}>{item.orderCount} Orders 📦</Text>
              </View>
            </View>

            <View style={styles.rightSide}>
              <View
                style={[
                  styles.badge,
                  { backgroundColor: getStatusColor(item.status) + "20" },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: getStatusColor(item.status) },
                  ]}
                >
                  {item.status}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* QUICK ALERT */}
      <View
        style={[
          styles.alertBox,
          {
            backgroundColor:
              delayedCount > 0 ? "#FEE2E2" : "#DCFCE7",
          },
        ]}
      >
        <Text
          style={{
            color: delayedCount > 0 ? "#B91C1C" : "#166534",
            fontWeight: "600",
          }}
        >
          {delayedCount > 0
            ? `${delayedCount} shipments are delayed`
            : "All shipments are on time"}
        </Text>
      </View>
    </ScrollView>
  );
}


/*  STAT CARD COMPONENT */

const StatCard = ({ icon, title, value, color }) => {
  return (
    <View style={styles.statCard}>
      <View style={[styles.iconCircle, { backgroundColor: color + "20" }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );
};


