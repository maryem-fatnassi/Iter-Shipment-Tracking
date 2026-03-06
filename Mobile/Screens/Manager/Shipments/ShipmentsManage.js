import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Button,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { reusableStyle } from "../../reusableStyle";
import { router } from "expo-router";
import { styles } from "../Styles/shipmentsManage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function ShipmentsManagement() {
  const [search, setSearch] = useState("");
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [visible, setVisible] = useState(false);
  // const [id, setId] = useState();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [status, setStatus] = useState("");
  const [driverName, setDriverName] = useState("");
  const [orderCount, setOrderCount] = useState();
  const [showDate, setShowDate] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShowDate(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const fetchShipments = ()=>{
    fetch("http://192.168.1.9:5000/get/shipments")
      .then((res) => res.json())
      .then((data) => setShipments(data))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchShipments();
  }, []);
  

  const filteredShipments = shipments.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.origin.toLowerCase().includes(search.toLowerCase()),
  );

  const delayedCount = shipments.filter(
    (s) => s.status.trim().toLowerCase() === "delayed",
  ).length;

  const getStatusColor = (status) => {
    switch (status.trim().toLowerCase()) {
      case "delivered":
        return "#22C55E";
      case "pending":
        return "#F59E0B";
      case "delayed":
        return "#EF4444";
      default:
        return "#3B82F6";
    }
  };

  const handleEditShipment = async () => {
    try {
      const response = await fetch(`http://192.168.1.9:5000/edit/shipments/${selectedShipment._id}`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({origin, destination, date, status, driverName, orderCount }),
      });
      const data = await response.json();
      console.log(data);
      const updatedShipment = shipments.map((ship) =>
      ship.id === selectedShipment.id
        ? {
            ...ship,
            origin: origin,
            destination: destination,
            date: date,
            status: status,
            driverName: driverName,
            orderCount: Number(orderCount),
          }
        : ship,
    );
    setShipments(updatedShipment);
    setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteShipment = async ()=>{
    try {
      const response = await fetch(`http://192.168.1.9:5000/delete/shipment/${selectedShipment._id}`,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json"
        },
      });
      if(!response.ok){
        const text = await response.text();
        console.log('Server error :' ,text)
      }
      await response.json({message : "Shipment deleted successfully ✅"})
      fetchShipments();
    } catch (error) {
      console.log("Network or parsing error :" , error);
    }
  }

  const deliveredCount = shipments.filter(
    (sh) => sh.status.trim().toLowerCase() === "delivered",
  );

  const pendingCount = shipments.filter(
    (sh) => sh.status.trim().toLowerCase() === "pending",
  );

  const delayedShipments = shipments.filter(
    (sh) => sh.status.trim().toLowerCase() === "delayed",
  );

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
          <StatCard
            icon="cube-outline"
            title="Total"
            value={shipments.length}
            color="#1E3A8A"
          />
          <StatCard
            icon="checkmark-circle-outline"
            title="Delivered"
            value={deliveredCount.length}
            color="#22C55E"
          />
          <StatCard
            icon="time-outline"
            title="Pending"
            value={pendingCount.length}
            color="#F59E0B"
          />
          <StatCard
            icon="alert-circle-outline"
            title="Delayed"
            value={delayedShipments.length}
            color="#EF4444"
          />
        </View>
      </ScrollView>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#fff" />
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
          <TouchableOpacity key={index} style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={styles.tracking}>#SH{item.id}</Text>
              </View>
              <View style={styles.editDeleteContainer}>
                {/* <TouchableOpacity> */}
                <AntDesign
                  name="edit"
                  size={20}
                  color="black"
                  style={styles.editBtn}
                  onPress={() => {
                    setSelectedShipment(item);
                    setOrigin(item.origin);
                    setDestination(item.destination);
                    setDate(new Date(item.date));
                    setStatus(item.status);
                    setDriverName(item.driverName);
                    setOrderCount(String(item.orderCount));
                    setVisible(true);
                  }}
                />
                {/* </TouchableOpacity> */}
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={20}
                    color="black"
                    onPress={()=>handleDeleteShipment}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.city}>{item.origin} → </Text>
                <Text style={styles.city}>{item.destination}</Text>
              </View>
              <Text style={styles.date}>
                {new Date(item.date).toLocaleDateString("en-GB")}
                {/* {item.date} */}
              </Text>
              <View style={{ marginTop: 15 }}>
                <View>
                  <Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#1E3A8A",
                      }}
                    >
                      Driver :{" "}
                    </Text>
                    {item.driverName}
                  </Text>
                  <Text style={{ marginTop: 5, fontWeight: "600" }}>
                    {item.orderCount} Orders 📦
                  </Text>
                </View>
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
            backgroundColor: delayedCount > 0 ? "#FEE2E2" : "#DCFCE7",
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
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Edit Shipment <AntDesign name="edit" size={18} color="#FB923C" />
          </Text>
          <TextInput
            placeholder="Origin"
            style={styles.editInput}
            value={origin}
            onChangeText={setOrigin}
          />

          <TextInput
            placeholder="Destination"
            style={styles.editInput}
            value={destination}
            onChangeText={setDestination}
          />

          {/* date picker */}
          <Pressable onPress={() => setShowDate(true)}>
            <Text style={styles.dateInput}>{date.toLocaleDateString()}</Text>
          </Pressable>

          {showDate && (
            <DateTimePicker value={date} mode="date" onChange={onChangeDate} />
          )}

          <View style={styles.statusSelect}>
            <Picker
              selectedValue={status}
              onValueChange={(itemValue) => setStatus(itemValue)}
            >
              <Picker.Item label="Pending" value="Pending" />
              <Picker.Item label="Delivered" value="Delivered" />
              <Picker.Item label="Delayed" value="Delayed" />
            </Picker>
          </View>

          <TextInput
            placeholder="Driver Name"
            style={styles.editInput}
            value={driverName}
            onChangeText={setDriverName}
          />

          <TextInput
            // placeholder="Order Count"
            style={styles.editInput}
            value={orderCount}
            onChangeText={setOrderCount}
          />

          <View style={styles.buttonRow}>
            <Pressable style={styles.saveBtn} onPress={()=>handleEditShipment}>
              <Text style={styles.btnText}>Save</Text>
            </Pressable>

            <Pressable
              style={styles.cancelBtn}
              onPress={() => setVisible(false)}
            >
              <Text style={{ fontWeight: "600" }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
