import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
   fontSize: 25, 
    fontWeight: '900', 
    color: '#1E3A8A', 
    letterSpacing: -1
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
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
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
  editDeleteContainer:{
    flexDirection:'row',
  },
  editBtn:{
    marginRight:20
  },
  statusSelect:{
    backgroundColor:'#fff',
    borderRadius: 10,
    marginBottom: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 20,
    justifyContent: "center",
  },

  editInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 15,
  },

  dateInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E3A8A",
    textAlign: "center",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  saveBtn: {
    backgroundColor: "#1E3A8A",
    padding: 14,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  cancelBtn: {
    backgroundColor: "#E5E7EB",
    padding: 14,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});