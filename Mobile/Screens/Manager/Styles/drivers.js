import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    fontSize: 28, 
    fontWeight: '900', 
    color: '#1E3A8A', 
    letterSpacing: -1
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
    color: "#fff",
    fontWeight: 500,
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
  editDeleteContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editBtn: {
    marginRight: 15,
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
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
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
    fontSize: 18,
    fontWeight: "bold",
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
  statusText: {
    fontWeight: "bold",
  },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 5, color: "#1E3A8A" },
});