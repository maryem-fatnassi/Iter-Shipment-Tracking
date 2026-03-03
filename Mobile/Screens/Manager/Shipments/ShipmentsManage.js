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

const shipments = [
  { id: "001", city: "Tunis → Gabes", date: "24 Feb 2026", status: "Delivered" },
  { id: "002", city: "Nabeul → Djerba", date: "26 Feb 2026", status: "Pending" },
  { id: "003", city: "Kasr Hlel → Sousse", date: "27 Feb 2026", status: "Delayed" },
  { id: "004", city: "Nabeul → Djerba", date: "26 Feb 2026", status: "Pending" },
  { id: "005", city: "Kasr Hlel → Sousse", date: "27 Feb 2026", status: "Delayed" },
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
              <Text style={styles.city}>{item.city}</Text>
              <Text style={styles.date}>{item.date}</Text>
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

/* ========================= */
/* 🔹 STAT CARD COMPONENT */
/* ========================= */

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

/* ========================= */
/* 🔹 STYLES */
/* ========================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FD",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  addButton: {
    backgroundColor: "#1E3A8A",
    padding: 10,
    borderRadius: 12,
    elevation: 4,
  },

  statsRow: {
    flexDirection: "row",
    marginVertical: 20,
  },

  statCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginRight: 15,
    width: 120,
    alignItems: "center",
    elevation: 4,
  },

  iconCircle: {
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },

  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  statTitle: {
    fontSize: 13,
    color: "#6B7280",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
    paddingHorizontal: 15,
    borderRadius: 25,
    height: 45,
    elevation: 3,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  tracking: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  city: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 3,
  },

  date: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 3,
  },

  rightSide: {
    alignItems: "flex-end",
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 6,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },

  alertBox: {
    marginTop: 20,
    marginBottom:50,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
});