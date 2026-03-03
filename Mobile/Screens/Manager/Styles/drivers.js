import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    backgroundColor: "#1E3A8A",
    paddingTop: 40,
    paddingBottom: 45,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 50,
    borderTopRightRadius:50, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft:5,
    marginRight:5,
    marginTop:5
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#FB923C",
    padding: 8,
    borderRadius: 10,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  statCard: {
    backgroundColor: "#fff",
    width: "30%",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    elevation: 4,
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

  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#1E3A8A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  name: {
    fontWeight: "700",
    fontSize: 14,
  },

  phone: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 3,
  },

  shipments: {
    color: "#374151",
    fontSize: 12,
    marginTop: 3,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
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
});