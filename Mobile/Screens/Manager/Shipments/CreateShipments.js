// import React, { useEffect, useState } from 'react';
// import { 
//   Text, TextInput, View, ScrollView, 
//   TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView 
// } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { styles } from '../Styles/createShipment';
// import  Toast  from 'react-native-toast-message';
// import { Picker } from '@react-native-picker/picker';

// const COLORS = {
//   orange: '#FB923C',
//   blue: '#1E3A8A',
//   lightGray: '#cccccc75',
//   white: '#FFFFFF',
//   textGray: '#64748b'
// };

// export default function CreateShipments() {
//   const [focusedField, setFocusedField] = useState(null);
//   const [id , setId] = useState();
//   const [origin, setOrigin] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState();
//   const [status, setStatus] = useState("");
//   const [driverName, setDriverName] = useState("");
//   const [orderCount, setOrderCount] = useState();

//   const handleSubmit = async()=>{
//     try {
//       const res = await fetch("http://192.168.1.9:5000/add/shipment",{
//           method:'POST',
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ id,origin, destination , date , status , driverName , orderCount}),
//       });
//       const data = await res.json();
//       console.log(data)
//       if (res.ok) {
//       Toast.show({
//         type: 'success',
//         text1: 'Success',
//         text2: 'Shipment Created Successfully ✅'
//       });
//     } else {
//       Toast.show({
//         type: 'error',
//         text1: 'Error',
//         text2: data.message
//       });
//     }

//   } catch (error) {
//     Toast.show({
//       type: 'error',
//       text1: 'Error',
//       text2: 'Network error ❌'
//     });
//   }
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.title}>New Shipment <Text style={{fontSize:24}}>📦✨</Text></Text>
//             <View style={styles.accentBar} />
//           </View>

//           {/* Form Section */}
//           <View style={styles.formContainer}>
            
//             <CustomInput 
//               label="SHIPMENT ID"
//               icon="identifier" 
//               placeholder="001" 
//               isFocused={focusedField === 'id'}
//               onFocus={() => setFocusedField('id')}
//               onBlur={() => setFocusedField(null)}
//               onChangeText={setId}
//             />

//             <View style={styles.row}>
//               <CustomInput 
//                 label="ORIGIN"
//                 icon="map-marker-outline" 
//                 placeholder="From..." 
//                 halfWidth 
//                 isFocused={focusedField === 'origin'}
//                 onFocus={() => setFocusedField('origin')}
//                 onBlur={() => setFocusedField(null)}
//                 onChangeText={setOrigin}
//               />
//               <CustomInput 
//                 label="DESTINATION"
//                 icon="map-marker-check" 
//                 placeholder="To..." 
//                 halfWidth 
//                 isFocused={focusedField === 'dest'}
//                 onFocus={() => setFocusedField('dest')}
//                 onBlur={() => setFocusedField(null)}
//                 onChangeText={setDestination}
//               />
//             </View>

//             <View style={styles.row}>
//               <CustomInput 
//                 label="DATE"
//                 icon="calendar-month-outline" 
//                 placeholder="03/04/2026" 
//                 halfWidth 
//                 isFocused={focusedField === 'date'}
//                 onFocus={() => setFocusedField('date')}
//                 onBlur={() => setFocusedField(null)}
//                 onChangeText={setDate}
//               />
//                {/* <CustomInput 
//                 label="STATUS"
//                 icon="list-status" 
//                 placeholder="Pending" 
//                 halfWidth 
//                 isFocused={focusedField === 'status'}
//                 onFocus={() => setFocusedField('status')}
//                 onBlur={() => setFocusedField(null)}
//                 onChangeText={setStatus}
//               />  */}
//               <StatusSelect
//   value={status}
//   onChange={setStatus}
//   halfWidth
// />
//              </View>

//             <CustomInput 
//               label="DRIVER NAME"
//               icon="account-outline" 
//               placeholder="Assign a driver" 
//               isFocused={focusedField === 'driver'}
//               onFocus={() => setFocusedField('driver')}
//               onBlur={() => setFocusedField(null)}
//               onChangeText={setDriverName}
//             />

//             <CustomInput 
//               label="ORDER COUNT"
//               icon="numeric-box-multiple-outline" 
//               placeholder="0" 
//               keyboardType="numeric"
//               isFocused={focusedField === 'count'}
//               onFocus={() => setFocusedField('count')}
//               onBlur={() => setFocusedField(null)}
//               onChangeText={setOrderCount}
//             />

//             <TouchableOpacity style={styles.mainButton} activeOpacity={0.8} onPress={handleSubmit}>
//               <Text style={styles.buttonText} >CONFIRM & CREATE</Text>
//               <MaterialCommunityIcons name="arrow-right-circle" size={24} color={COLORS.white} />
//             </TouchableOpacity>
//           </View>

//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const CustomInput = ({ icon, label, placeholder, halfWidth, isFocused, onFocus, onBlur, keyboardType , onChangeText}) => (
//   <View style={[styles.inputGroup, halfWidth && { width: '48%' }]}>
//     <Text style={[styles.label, isFocused && { color: COLORS.blue }]}>{label}</Text>
//     <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
//       <MaterialCommunityIcons name={icon} size={20} color={isFocused ? COLORS.blue : COLORS.textGray} />
//       <TextInput 
//         placeholder={placeholder} 
//         placeholderTextColor="#94a3b8"
//         style={styles.input}
//         onFocus={onFocus}
//         onBlur={onBlur}
//         keyboardType={keyboardType}
//         onChangeText={onChangeText}
//       />
//     </View>
//   </View>
// );

// const StatusSelect = ({ value, onChange }) => {
//   return (
//     <View style={styles.inputGroup}>
//       <Text style={styles.label}>STATUS</Text>

//       <View style={styles.inputWrapper}>
//         <MaterialCommunityIcons 
//           name="list-status" 
//           size={20} 
//           color={COLORS.textGray} 
//         />

//         <Picker
//           selectedValue={value}
//           style={{ flex: 1 }}
//           onValueChange={(itemValue) => onChange(itemValue)}
//           halfWidth
//         >
//           <Picker.Item label="Pending" value="Pending" />
//           <Picker.Item label="On Delivery" value="On Delivery" />
//           <Picker.Item label="Delayed" value="Delayed" />
//         </Picker>
//       </View>
//     </View>
//   );
// };


import React, { useState } from 'react';
import { 
  Text, TextInput, View, ScrollView, 
  TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../Styles/createShipment';
import Toast from 'react-native-toast-message';
import { Picker } from '@react-native-picker/picker';

const COLORS = {
  orange: '#FB923C',
  blue: '#1E3A8A',
  lightGray: '#cccccc75',
  white: '#FFFFFF',
  textGray: '#64748b'
};

export default function CreateShipments() {
  const [focusedField, setFocusedField] = useState(null);

  const [id , setId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [driverName, setDriverName] = useState("");
  const [orderCount, setOrderCount] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://192.168.1.9:5000/add/shipment",{
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({ id, origin, destination, date, status, driverName, orderCount })
      });

      const data = await res.json();
      

      if(res.ok){
        Toast.show({ type:'success', text1:'Success', text2:'Shipment Created Successfully ✅' });
      }else{
        Toast.show({ type:'error', text1:'Error', text2:data.message });
      }
    } catch (error) {
      Toast.show({ type:'error', text1:'Error', text2:'Network error ❌' });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'padding':'height'} style={{flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>New Shipment <Text style={{fontSize:24}}>📦✨</Text></Text>
            <View style={styles.accentBar}/>
          </View>

          <View style={styles.formContainer}>
            
            {/* Shipment ID */}
            <CustomInput
              label="SHIPMENT ID"
              icon="identifier"
              placeholder="001"
              value={id}
              onChangeText={setId}
              isFocused={focusedField==='id'}
              onFocus={()=>setFocusedField('id')}
              onBlur={()=>setFocusedField(null)}
            />

            {/* Origin + Destination */}
            <View style={styles.row}>
              <CustomInput
                label="ORIGIN"
                icon="map-marker-outline"
                placeholder="From..."
                value={origin}
                onChangeText={setOrigin}
                isFocused={focusedField==='origin'}
                onFocus={()=>setFocusedField('origin')}
                onBlur={()=>setFocusedField(null)}
                halfWidth
              />

              <CustomInput
                label="DESTINATION"
                icon="map-marker-check"
                placeholder="To..."
                value={destination}
                onChangeText={setDestination}
                isFocused={focusedField==='dest'}
                onFocus={()=>setFocusedField('dest')}
                onBlur={()=>setFocusedField(null)}
                halfWidth
              />
            </View>

            {/* Date + Status */}
            <View style={styles.row}>
              <CustomInput
                label="DATE"
                icon="calendar-month-outline"
                placeholder="03/04/2026"
                value={date}
                onChangeText={setDate}
                isFocused={focusedField==='date'}
                onFocus={()=>setFocusedField('date')}
                onBlur={()=>setFocusedField(null)}
                halfWidth
              />

              <CustomPicker
                label="STATUS"
                icon="list-status"
                value={status}
                onChange={setStatus}
                halfWidth
              />
            </View>

            {/* Driver Name */}
            <CustomInput
              label="DRIVER NAME"
              icon="account-outline"
              placeholder="Assign a driver"
              value={driverName}
              onChangeText={setDriverName}
              isFocused={focusedField==='driver'}
              onFocus={()=>setFocusedField('driver')}
              onBlur={()=>setFocusedField(null)}
            />

            {/* Order Count */}
            <CustomInput
              label="ORDER COUNT"
              icon="numeric-box-multiple-outline"
              placeholder="0"
              keyboardType="numeric"
              value={orderCount}
              onChangeText={setOrderCount}
              isFocused={focusedField==='count'}
              onFocus={()=>setFocusedField('count')}
              onBlur={()=>setFocusedField(null)}
            />

            <TouchableOpacity style={styles.mainButton} activeOpacity={0.8} onPress={handleSubmit}>
              <Text style={styles.buttonText}>CONFIRM & CREATE</Text>
              <MaterialCommunityIcons name="arrow-right-circle" size={24} color={COLORS.white}/>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

// ================= Custom Input =================
const CustomInput = ({ icon, label, placeholder, halfWidth, value, onChangeText, isFocused, onFocus, onBlur, keyboardType }) => (
  <View style={[styles.inputGroup, halfWidth && { width:'48%' }]}>
    <Text style={[styles.label, isFocused && { color: COLORS.blue }]}>{label}</Text>
    <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
      <MaterialCommunityIcons name={icon} size={20} color={isFocused ? COLORS.blue : COLORS.textGray} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
      />
    </View>
  </View>
);

// ================= Custom Picker =================
const CustomPicker = ({ label, icon, value, onChange, halfWidth }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.inputGroup, halfWidth && { width:'48%' }]}>
      <Text style={[styles.label, isFocused && { color: COLORS.blue }]}>{label}</Text>
      <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
        <MaterialCommunityIcons name={icon} size={20} color={isFocused ? COLORS.blue : COLORS.textGray} />
        <Picker
          selectedValue={value}
          style={{ flex:1 }}
          onValueChange={(val) => onChange(val)}
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
        >
          <Picker.Item label="Pending" value="Pending"/>
          <Picker.Item label="Delivered" value="Delivered"/>
          <Picker.Item label="Delayed" value="Delayed"/>
        </Picker>
      </View>
    </View>
  );
};