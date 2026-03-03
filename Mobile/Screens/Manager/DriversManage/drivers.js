// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useState } from "react";
// import { Modal } from "react-native";
// import { styles } from "../Styles/drivers";

// const driversData = [
//   {
//     id: "D01",
//     name: "Mohamed Salah",
//     phone: "99 000 111",
//     shipments: 3,
//     status: "On Delivery",
//   },
//   {
//     id: "D02",
//     name: "Ahmed Ben Ali",
//     phone: "55 888 777",
//     shipments: 0,
//     status: "Available",
//   },
//   {
//     id: "D03",
//     name: "Youssef Trabelsi",
//     phone: "22 333 444",
//     shipments: 2,
//     status: "On Delivery",
//   },
//   {
//     id: "D04",
//     name: "Ali Trabelsi",
//     phone: "26 333 444",
//     shipments: 2,
//     status: "On Delivery",
//   },
// ];


// export default function DriversManagement() {
//   const [drivers, setDrivers] = useState(driversData);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newName, setNewName] = useState("");
//   const [newPhone, setNewPhone] = useState("");
  
//   const [search, setSearch] = useState("");

//   const filteredDrivers = drivers.filter(
//     (d) =>
//       d.name.toLowerCase().includes(search.toLowerCase()) ||
//       d.phone.includes(search)
//   );

//   const handleAddDriver = () => {
//   if (!newName || !newPhone) return;

//   const newDriver = {
//     id: Date.now().toString(),
//     name: newName,
//     phone: newPhone,
//     shipments: 0,
//     status: "Available",
//   };

//   setDrivers([newDriver, ...drivers]);
//   setNewName("");
//   setNewPhone("");
//   setModalVisible(false);
// };

//   const getStatusColor = (status) => {
//     return status === "Available" ? "#22C55E" : "#F59E0B";
//   };

//   const onDelivery = drivers.filter((d)=>d.status.toLocaleLowerCase() === 'On Delivery'.toLocaleLowerCase());
//   const available = drivers.filter((d)=>d.status.toLocaleLowerCase() === 'Available'.toLocaleLowerCase());

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
//       {/*  HEADER */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Drivers Management</Text>

//         <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(!modalVisible)}>
//           <Ionicons name="add" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/*  QUICK STATS */}
//       <View style={styles.statsRow}>
//         <StatCard title="Total Drivers" value={drivers.length} icon="people-outline" />
//         <StatCard title="On Delivery" value={onDelivery.length} icon="car-outline" />
//         <StatCard title="Available" value={available.length} icon="checkmark-circle-outline" />
//       </View>

//       {/*  SEARCH */}
//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={18} color="#6B7280" />
//         <TextInput
//           placeholder="Search driver by name or phone.."
//           placeholderTextColor="#9CA3AF"
//           style={styles.searchInput}
//           value={search}
//           onChangeText={setSearch}
//         />
//       </View>

//       {/*  DRIVERS LIST */}
//       <View style={{ marginTop: 10 }}>
//         {filteredDrivers.map((driver, index) => (
//           <View key={index} style={styles.card}>
            
//             {/* Avatar */}
//             <View style={styles.avatar}>
//               <Text style={styles.avatarText}>
//                 {driver.name.charAt(0)}
//               </Text>
//             </View>

//             {/* Info */}
//             <View style={{ flex: 1 }}>
//               <Text style={styles.name}>{driver.name}</Text>
//               <Text style={styles.phone}>{driver.phone}</Text>
//               <Text style={styles.shipments}>
//                 {driver.shipments} Active Shipments
//               </Text>
//             </View>

//             {/* Status */}
//             <View
//               style={[
//                 styles.statusBadge,
//                 { backgroundColor: getStatusColor(driver.status) + "20" },
//               ]}
//             >
//               <Text
//                 style={{
//                   color: getStatusColor(driver.status),
//                   fontWeight: "600",
//                   fontSize: 12,
//                 }}
//               >
//                 {driver.status}
//               </Text>
//             </View>
//           </View>
//         ))}
//       </View>

//       <View style={{ height: 40 }} />


//       <Modal
//   visible={modalVisible}
//   transparent
//   animationType="slide"
// >
//   <View style={styles.modalOverlay}>
//     <View style={styles.modalContainer}>
//       <Text style={styles.modalTitle}>Add New Driver</Text>

//       <TextInput
//         placeholder="Driver Name"
//         style={styles.input}
//         value={newName}
//         onChangeText={setNewName}
//       />

//       <TextInput
//         placeholder="Phone Number"
//         style={styles.input}
//         keyboardType="phone-pad"
//         value={newPhone}
//         onChangeText={setNewPhone}
//       />

//       <TouchableOpacity
//         style={styles.saveButton}
//         onPress={handleAddDriver}
//       >
//         <Text style={{ color: "#fff", fontWeight: "600" }}>
//           Save Driver
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{ marginTop: 10 }}
//         onPress={() => setModalVisible(false)}
//       >
//         <Text style={{ color: "#6B7280" }}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </Modal>


//     </ScrollView>
//   );
// }

// /*  STAT CARD */
// const StatCard = ({ title, value, icon }) => (
//   <View style={styles.statCard}>
//     <Ionicons name={icon} size={22} color="#1E3A8A" />
//     <Text style={styles.statValue}>{value}</Text>
//     <Text style={styles.statTitle}>{title}</Text>
//   </View>
// );





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
import {AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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
            <Text style={styles.infoText}>
              {item.shipments} Shipments
            </Text>
          </View>

          <TouchableOpacity style={styles.callBtn}>
            <Ionicons name="call-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.phone}>📞 {item.phone}</Text>

        <View style={styles.editDeleteContainer}>
          <TouchableOpacity><AntDesign name="edit" size={20} color="black" style={styles.editBtn} onPress={() => {
  setSelectedDriver(item);
  setname(item.name);
  setShipments(item.shipments.toString());
  setphone(item.phone);
  setstatus(item.status);
  isEditModalVisibile(true);
}}/></TouchableOpacity>
          <TouchableOpacity><MaterialCommunityIcons name="delete-outline" size={20} color="black" /></TouchableOpacity>
        </View>
      </View>
    );
  };
  const [drivers, setDrivers] = useState(driversData);
  const onDelivery = drivers.filter((d)=>d.status.toLocaleLowerCase() === 'On Delivery'.toLocaleLowerCase());
  const available = drivers.filter((d)=>d.status.toLocaleLowerCase() === 'Available'.toLocaleLowerCase());

  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

    const handleAddDriver = () => {
  if (!newName || !newPhone) return;

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
      d.phone.includes(search)
  );

  // Edit Modal states
  const [editModalVisibile, isEditModalVisibile] = useState(false);
  const [name, setname] = useState("");
  const [shipments, setShipments] = useState("");
  const [phone, setphone] = useState("");
  const [status, setstatus] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleEditDriver = () => {
  if (!selectedDriver) return;

  const updatedDrivers = drivers.map((driver) =>
    driver.id === selectedDriver.id
      ? {
          ...driver,
          name: name,
          phone: phone,
          shipments: Number(shipments),
          status: status,
        }
      : driver
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
        <StatCard title="Total Drivers" value={drivers.length} icon="people-outline" />
        <StatCard title="On Delivery" value={onDelivery.length} icon="car-outline" />
        <StatCard title="Available" value={available.length} icon="checkmark-circle-outline" />
      </View>

      {/* Search */}
         <TextInput
          placeholder="Search driver by name or phone.."
          placeholderTextColor="#fff"
          style={styles.search}
          value={search}
          onChangeText={setSearch}
        />

      {/* List */}
      <FlatList
        data={filteredDrivers}
        keyExtractor={(item) => item.id}
        renderItem={renderDriver}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingBtn}  onPress={() => setModalVisible(!modalVisible)}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>


{/* Add Drivers Modal */}
             <Modal
  visible={modalVisible}
  transparent
  animationType="slide"
>
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
        onPress={()=>handleAddDriver}
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
             <Modal
  visible={editModalVisibile}
  transparent
  animationType="slide"
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Edit Driver</Text>

      <TextInput
        placeholder="Edit Name"
        style={styles.input}
        value={name}
        onChangeText={setname}
      />

      <TextInput
        placeholder="Edit Shipments"
        style={styles.input}
        value={shipments}
        keyboardType="phone-pad"
        onChangeText={setShipments}
      />

      <TextInput
        placeholder="Edit Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setphone}
      />

      <TouchableOpacity
  style={[styles.statusOption,status === "Available" && styles.statusActive]}
  onPress={() => setstatus("Available")}
>
  <Text style={styles.statusText}>Available</Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.statusOption,status === "On Delivery" && styles.statusActiveOnDev,{marginBottom:20}]}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
  },
  headerSub: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  // searchContainer: {
  //   flexDirection: "row",
  //   backgroundColor: "#fff",
  //   marginHorizontal: 20,
  //   marginTop: 20,
  //   paddingHorizontal: 15,
  //   paddingVertical: 12,
  //   borderRadius: 12,
  //   alignItems: "center",
  //   elevation: 2,
  //   width:"100%"
  // },
  search: {
    backgroundColor: "#1E3A8A",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
    fontSize: 14,
    color:'#fff',
    fontWeight:500,
    // width:'100%',
    // marginLeft: 10,
    // flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  id: {
    fontSize: 12,
    color: "#6B7280",
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  middleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    marginLeft: 6,
    fontWeight: "500",
    color: "#374151",
  },
  callBtn: {
    backgroundColor: "#FB923C",
    padding: 10,
    borderRadius: 12,
  },
  phone: {
    marginTop: 10,
    fontSize: 13,
    color: "#6B7280",
  },
  editDeleteContainer:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  editBtn:{
    marginRight:15
  },
  floatingBtn: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#1E3A8A",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
    statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  statCard: {
    backgroundColor: "#fff",
    width: "35%",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    elevation: 4,
    marginLeft:5,
    marginRight:5,
    marginBottom:30
  },

  statValue: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 6,
  },

  statTitle: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 4,
    textAlign: "center",
  },
   modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  justifyContent: "center",
  padding: 20,
},

modalContainer: {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 20,
},

modalTitle: {
  fontSize: 16,
  fontWeight: "700",
  marginBottom: 15,
},

input: {
  backgroundColor: "#F3F4F6",
  padding: 12,
  borderRadius: 10,
  marginBottom: 12,
},

saveButton: {
  backgroundColor: "#1E3A8A",
  padding: 14,
  borderRadius: 12,
  alignItems: "center",
},
statusOption: {
  paddingVertical: 12,
  paddingHorizontal: 15,
  borderRadius: 12,
  marginTop: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",
  alignItems: "center",
},
statusActive: {
  backgroundColor: "#E8F8F0",
  borderColor: "#22A06B",
},
statusActiveOnDev: {
  backgroundColor: "#fb923c49",
  borderColor: "#FB923C",
},
statusText:{
  fontWeight:'bold'
}
});
