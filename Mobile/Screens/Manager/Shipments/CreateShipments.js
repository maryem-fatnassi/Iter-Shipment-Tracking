import React, { useState } from 'react';
import { 
  Text, TextInput, View, ScrollView, 
  TouchableOpacity, Platform, StatusBar, KeyboardAvoidingView 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../Styles/createShipment';


const COLORS = {
  orange: '#FB923C',
  blue: '#1E3A8A',
  lightGray: '#cccccc75',
  white: '#FFFFFF',
  textGray: '#64748b'
};

export default function CreateShipments() {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>New Shipment <Text style={{fontSize:24}}>📦✨</Text></Text>
            <View style={styles.accentBar} />
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            
            <CustomInput 
              label="SHIPMENT ID"
              icon="identifier" 
              placeholder="SHP-2026-X" 
              isFocused={focusedField === 'id'}
              onFocus={() => setFocusedField('id')}
              onBlur={() => setFocusedField(null)}
            />

            <View style={styles.row}>
              <CustomInput 
                label="ORIGIN"
                icon="map-marker-outline" 
                placeholder="From..." 
                halfWidth 
                isFocused={focusedField === 'origin'}
                onFocus={() => setFocusedField('origin')}
                onBlur={() => setFocusedField(null)}
              />
              <CustomInput 
                label="DESTINATION"
                icon="map-marker-check" 
                placeholder="To..." 
                halfWidth 
                isFocused={focusedField === 'dest'}
                onFocus={() => setFocusedField('dest')}
                onBlur={() => setFocusedField(null)}
              />
            </View>

            <View style={styles.row}>
              <CustomInput 
                label="DATE"
                icon="calendar-month-outline" 
                placeholder="03/04/2026" 
                halfWidth 
                isFocused={focusedField === 'date'}
                onFocus={() => setFocusedField('date')}
                onBlur={() => setFocusedField(null)}
              />
               <CustomInput 
                label="STATUS"
                icon="list-status" 
                placeholder="Pending" 
                halfWidth 
                isFocused={focusedField === 'status'}
                onFocus={() => setFocusedField('status')}
                onBlur={() => setFocusedField(null)}
              /> 
             </View>

            <CustomInput 
              label="DRIVER NAME"
              icon="account-outline" 
              placeholder="Assign a driver" 
              isFocused={focusedField === 'driver'}
              onFocus={() => setFocusedField('driver')}
              onBlur={() => setFocusedField(null)}
            />

            <CustomInput 
              label="ORDER COUNT"
              icon="numeric-box-multiple-outline" 
              placeholder="0" 
              keyboardType="numeric"
              isFocused={focusedField === 'count'}
              onFocus={() => setFocusedField('count')}
              onBlur={() => setFocusedField(null)}
            />

            <TouchableOpacity style={styles.mainButton} activeOpacity={0.8}>
              <Text style={styles.buttonText} >CONFIRM & CREATE</Text>
              <MaterialCommunityIcons name="arrow-right-circle" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const CustomInput = ({ icon, label, placeholder, halfWidth, isFocused, onFocus, onBlur, keyboardType }) => (
  <View style={[styles.inputGroup, halfWidth && { width: '48%' }]}>
    <Text style={[styles.label, isFocused && { color: COLORS.blue }]}>{label}</Text>
    <View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
      <MaterialCommunityIcons name={icon} size={20} color={isFocused ? COLORS.blue : COLORS.textGray} />
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor="#94a3b8"
        style={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        keyboardType={keyboardType}
      />
    </View>
  </View>
);
