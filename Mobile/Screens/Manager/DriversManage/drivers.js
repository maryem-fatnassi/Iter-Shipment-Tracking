import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { styles } from "../Styles/drivers";

const driversData = [
  {
    id: "D01",
    name: "Mohamed Salah",
    phone: "99 000 111",
    shipments: 3,
    status: "On Delivery",
  },
  {
    id: "D02",
    name: "Ahmed Ben Ali",
    phone: "55 888 777",
    shipments: 0,
    status: "Available",
  },
  {
    id: "D03",
    name: "Youssef Trabelsi",
    phone: "22 333 444",
    shipments: 2,
    status: "On Delivery",
  },
  {
    id: "D04",
    name: "Ali Trabelsi",
    phone: "26 333 444",
    shipments: 2,
    status: "On Delivery",
  },
  {
    id: "D05",
    name: "Neder Sagar",
    phone: "28 338 424",
    shipments: 3,
    status: "Available",
  },
];

export default function DriversScreen() {
  const renderDriver = ({ item }) => {
    const isAvailable = item.status === "Available";

    return (
      <View style={styles.card}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.id}>#{item.id}</Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              { backgroundColor: isAvailable ? "#E8F8F0" : "#FFF4E5" },
            ]}
          >
            <Text
              style={{
                color: isAvailable ? "#22A06B" : "#E67E22",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              {item.status}
            </Text>
          </View>
        </View>

        <View style={styles.middleRow}>
          <View style={styles.infoBox}>
            <Ionicons name="cube-outline" size={18} color="#3B82F6" />
            <Text style={styles.infoText}>{item.shipments} Shipments</Text>
          </View>

          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.phone}>📞 {item.phone}</Text>

        <View style={styles.editDeleteContainer}>
          <TouchableOpacity>
            <AntDesign
              name="edit"
              size={20}
              color="black"
              style={styles.editBtn}
              onPress={() => {
                setSelectedDriver(item);
                setname(item.name);
                setShipments(item.shipments.toString());
                setphone(item.phone);
                setstatus(item.status);
                isEditModalVisibile(true);
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="delete-outline"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const [drivers, setDrivers] = useState(driversData);
  const onDelivery = drivers.filter(
    (d) => d.status.toLocaleLowerCase() === "On Delivery".toLocaleLowerCase(),
  );
  const available = drivers.filter(
    (d) => d.status.toLocaleLowerCase() === "Available".toLocaleLowerCase(),
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[^0-9]/g, "");
    const phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(cleaned);
  };

  const phoneExists = (phoneNum)=>{
    const cleaned = phoneNum.replace(/\D/g, "");
    const exists = drivers.some((d)=>d.phone.replace(/\D/g, "") === cleaned);
    return exists;
  }

  const handleAddDriver = () => {
    if (!newName || !newPhone){
      alert("Please fill all fields");
      return;
    };
    if (!validatePhone(newPhone)) {
      alert("Phone number must be 8 digits");
      return;
    };
    if(phoneExists(newPhone)){
      alert("Phone number is already exists");
      return;
    }
    const newDriver = {
      id: Date.now().toString(),
      name: newName,
      phone: newPhone,
      shipments: 0,
      status: "Available",
    };

    setDrivers([newDriver, ...drivers]);
    setNewName("");
    setNewPhone("");
    setModalVisible(false);
  };

  const [search, setSearch] = useState("");

  const filteredDrivers = drivers.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.phone.includes(search),
  );

  // Edit Modal states
  const [editModalVisibile, isEditModalVisibile] = useState(false);
  const [name, setname] = useState("");
  const [shipments, setShipments] = useState("");
  const [phone, setphone] = useState("");
  const [status, setstatus] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleEditDriver = () => {
    if (!selectedDriver) {
    alert("Please fill all fields");
    return;
  };

  if (!validatePhone(phone)) {
   alert("Phone number must be 8 digits");
   return;
  };

  if(phoneExists(phone)){
      alert("Phone number is already exists");
      return;
    };

  const updatedDrivers = drivers.map((driver) =>
      driver.id === selectedDriver.id
        ? {
            ...driver,
            name: name,
            phone: phone,
            shipments: Number(shipments),
            status: status,
          }
        : driver,
    );
    setDrivers(updatedDrivers);
    isEditModalVisibile(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Drivers Management</Text>
        <Text style={styles.headerSub}>
          Manage and monitor your delivery drivers...
        </Text>
      </View>

      <View style={styles.statsRow}>
        <StatCard
          title="Total Drivers"
          value={drivers.length}
          icon="people-outline"
        />
        <StatCard
          title="On Delivery"
          value={onDelivery.length}
          icon="car-outline"
        />
        <StatCard
          title="Available"
          value={available.length}
          icon="checkmark-circle-outline"
        />
      </View>

      {/* Search */}
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TextInput
        placeholder="Search driver by name or phone.."
        placeholderTextColor="#fff"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity style={styles.createBtnContainer}>
        <Text style={styles.createBtn}>Create Driver</Text>
      </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={filteredDrivers}
        keyExtractor={(item) => item.id}
        renderItem={renderDriver}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingBtn}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Add Drivers Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Driver</Text>

            <TextInput
              placeholder="Driver Name"
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />

            <TextInput
              placeholder="Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={newPhone}
              onChangeText={setNewPhone}
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleAddDriver}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Save Driver
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#6B7280" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Edit Drivers Modal */}
      <Modal visible={editModalVisibile} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Driver</Text>

            <Text style={styles.label}>Name :</Text>
            <TextInput
              placeholder="Edit Name"
              style={styles.input}
              value={name}
              onChangeText={setname}
            />

            <Text style={styles.label}>Shipments :</Text>
            <TextInput
              placeholder="Edit Shipments"
              style={styles.input}
              value={shipments}
              keyboardType="phone-pad"
              onChangeText={setShipments}
            />

            <Text style={styles.label}>Phone Number :</Text>
            <TextInput
              placeholder="Edit Phone Number"
              style={styles.input}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setphone}
            />

            <TouchableOpacity
              style={[
                styles.statusOption,
                status === "Available" && styles.statusActive,
              ]}
              onPress={() => setstatus("Available")}
            >
              <Text style={styles.statusText}>Available</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.statusOption,
                status === "On Delivery" && styles.statusActiveOnDev,
                { marginBottom: 20 },
              ]}
              onPress={() => setstatus("On Delivery")}
            >
              <Text style={styles.statusText}>On Delivery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleEditDriver}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>
                Edit Driver
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => isEditModalVisibile(false)}
            >
              <Text style={{ color: "#6B7280" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

/*  STAT CARD */
const StatCard = ({ title, value, icon }) => (
  <View style={styles.statCard}>
    <Ionicons name={icon} size={22} color="#FB923C" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statTitle}>{title}</Text>
  </View>
);


