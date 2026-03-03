import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const CreateShipments = ({ addShipment }) => {
  const [formData, setFormData] = useState({
    shipmentID: "",
    itemType: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    status: "Pending",
    shipmentDate: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.shipmentID || !formData.itemType || !formData.receiverName) {
      alert("Please fill all required fields");
      return;
    }
    addShipment(formData);
    setFormData({
      shipmentID: "",
      itemType: "",
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
      status: "Pending",
      shipmentDate: new Date().toISOString().slice(0, 10),
    });
  };

  return (
    <LinearGradient
      colors={["#1E3A8A", "#fff"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Shipment <Feather name="plus-circle" size={28} color="#fff" /></Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Shipment ID</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. SHP12345"
              placeholderTextColor="#aaa"
              value={formData.shipmentID}
              onChangeText={(text) => handleChange("shipmentID", text)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Item Type</Text>
            <TextInput
              style={styles.input}
              placeholder="Clothes, Shoes, etc."
              placeholderTextColor="#aaa"
              value={formData.itemType}
              onChangeText={(text) => handleChange("itemType", text)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Receiver Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#aaa"
              value={formData.receiverName}
              onChangeText={(text) => handleChange("receiverName", text)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Receiver Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#aaa"
              value={formData.receiverPhone}
              onChangeText={(text) => handleChange("receiverPhone", text)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Receiver Address</Text>
            <TextInput
              style={styles.input}
              placeholder="City, Street"
              placeholderTextColor="#aaa"
              value={formData.receiverAddress}
              onChangeText={(text) => handleChange("receiverAddress", text)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Shipment Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#aaa"
              value={formData.shipmentDate}
              onChangeText={(text) => handleChange("shipmentDate", text)}
            />
          </View>

          <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
            <Text style={styles.btnText}>Create Shipment</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default CreateShipments;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    padding: 20,
  },
  container: {
    // backgroundColor: "#fff",
    // borderRadius: 25,
    // padding: 20,
    shadowColor: "#000",
    // shadowOpacity: 0.15,
    // shadowRadius: 15,
    // elevation: 10,
    width:'100%'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  inputWrapper: { marginBottom: 15 },
  label: { fontSize: 18, fontWeight: "bold", marginBottom: 5, color: "#000" },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 15,
    fontSize: 16,
    color: "#333",
  },
  btnSubmit: {
    marginTop: 10,
    marginBottom:55,
    backgroundColor: "#FB923C",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
