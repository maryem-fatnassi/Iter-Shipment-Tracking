import { ScrollView, Text, View } from "react-native";
import DashboardHeader from "./DashboardHeader";
import StatsDashboard from "./StatsCards";


export default function DashboardScreen() {
  return (
    <ScrollView style={{backgroundColor:'#cccccc75'}}>
      <DashboardHeader userName="Maryem" />
      <StatsDashboard/>
    </ScrollView>
  );
}
