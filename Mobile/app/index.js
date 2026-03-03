// import { useRef } from "react";
// import { View, Text, Dimensions, Image } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useEffect } from "react";
// import { useRouter } from "expo-router";
// import LottieView from "lottie-react-native";
// import {Animated}  from "react-native";
// import { styles } from "../styles/appSplash";

import DriversManagement from "../Screens/Manager/DriversManage/drivers";


// const { width } = Dimensions.get("window");
// export default function Splash() {
//   const router = useRouter();
//       const progress = useRef(new Animated.Value(0)).current;

//       useEffect(() => {
//         Animated.timing(progress, {
//           toValue: width - 80, 
//           duration: 3500, 
//           useNativeDriver: false,
//         }).start();
      
//         const timer = setTimeout(() => {
//           router.replace("/login");
//         }, 3500);
//         return () => clearTimeout(timer);
//       }, []);

//   return (
      
//         <LinearGradient
//           colors={["#1E3A8A","#1E3A8A"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.container}
//         >
//           {/* Png Logo */}
//           <Image source={require("../assets/logo.png")} style={styles.logo}/>
//           <Animated.View style={styles.logoContainer}>
//             <Animated.Text style={styles.title}>
//               İter
//             </Animated.Text>
    
//             <Text style={styles.subtitle}>
//               Track Smart. Move Fast.
//             </Text>
//           </Animated.View>
    
//           {/* Lottie Animation */}
//           <LottieView
//             source={require("../assets/animations/delivery.json")}
//             autoPlay
//             loop
//             style={styles.lottie}
//           />
//           <View style={[styles.progressBar,{width: width - 80}]}>
//             <Animated.View
//               style={[styles.progress, { width: progress }]}
//             />
//           </View>     
//         </LinearGradient>
//       );

// }


export default function drivers(){
  return <DriversManagement/>
}