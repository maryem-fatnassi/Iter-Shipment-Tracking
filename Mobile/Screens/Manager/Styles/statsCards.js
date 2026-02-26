import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 40,
  },

  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 6,
    elevation: 3,
  },

  cardValue: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
  },

  cardTitle: {
    marginTop: 5,
    color: "#6B7280",
  },

  alertContainer: {
  paddingHorizontal: 20,
  marginTop: 10,
},

alertDanger: {
  backgroundColor: "#FEE2E2",
  padding: 15,
  borderRadius: 12,
  borderLeftWidth: 5,
  borderLeftColor: "#EF4444",
},

alertSuccess: {
  backgroundColor: "#DCFCE7",
  padding: 15,
  borderRadius: 12,
  borderLeftWidth: 5,
  borderLeftColor: "#22C55E",
},

alertText: {
  fontWeight: "600",
},

  latestContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  shipmentItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
  },

  tracking: {
    fontWeight: "bold",
  },

  status: {
    color: "#6B7280",
  },
});