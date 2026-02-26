import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import {styles} from '../Styles/statsCards'

 export default function StatsDashboard (){
  const stats = [
    { title: "Total", value: 120, color: "#3B82F6" },
    { title: "Pending", value: 15, color: "#F59E0B" },
    { title: "In Transit", value: 32, color: "#6366F1" },
    { title: "Delivered", value: 73, color: "#22C55E" },
  ];

  const latestShipments = [
  { id: "1", tracking: "#SH001", status: "Pending" },
  { id: "2", tracking: "#SH002", status: "Delayed" },
  { id: "3", tracking: "#SH003", status: "Delivered" },
  { id: "4", tracking: "#SH004", status: "Delayed" },
  { id: "5", tracking: "#SH005", status: "Delivered" },
];

const delayedCount = latestShipments.filter(
  (item) => item.status === "Delayed"
).length;

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.statsContainer}>
        {stats.map((item, index) => (
          <View key={index} style={[styles.card, { borderLeftColor: item.color }]}>
            <Text style={styles.cardValue}>{item.value}</Text>
            <Text style={styles.cardTitle}>{`${item.title}...`}</Text>
          </View>
        ))}
      </View>
     <View style={styles.alertContainer}>
      {delayedCount > 0 ? (
      <View style={styles.alertDanger}>
      <Text style={styles.alertText}>
        🚨 {delayedCount} shipments are delayed
      </Text>
      </View>
     ) : (
    <View style={styles.alertSuccess}>
      <Text style={styles.alertText}>
        ✅ All shipments are on time
      </Text>
    </View>
     )}
    </View>
      <View style={styles.latestContainer}>
        <Text style={styles.sectionTitle}>Latest Shipments</Text>

        {latestShipments.map((item) => (
          <View key={item.id} style={styles.shipmentItem}>
            <Text style={styles.tracking}>{item.tracking}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        ))}
      </View>

    </View>
  );
};


