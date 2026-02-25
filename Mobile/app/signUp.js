import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Alert, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons';
import { Link } from 'expo-router';
import { styles } from '../styles/auth.styles';

export default function SignUpScreen() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  async function signUpUsers() {
    try {
      // e.preventDefault();
      console.log({username,email,password,role})
    const response = await fetch("http://192.168.1.9:5000/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username,email, password , role }),
    });
    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    signUpUsers();
  },[])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
     >
      <ScrollView contentContainerStyle={styles.container}>
         <Text style={styles.title}>Create Account</Text>

         <TextInput
          placeholder="Name"
          value={username}
          onChangeText={setName}
          style={styles.input}
          // onFocus={()=>setIsFocused(true)}
         />

         <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
         />

         <View style={styles.passwordContainer}>
              <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword} 
              style={styles.passwordInput}
              />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
          </View>

         <Text style={styles.label}>Select Role :</Text>
          <View style={styles.pickerContainer}>
           <Picker
             selectedValue={role}
             onValueChange={(itemValue) => setRole(itemValue)}
             style={styles.picker}
            >
            <Picker.Item label="Client" value="client" />
            <Picker.Item label="Manager" value="manager" />
            <Picker.Item label="Driver" value="driver" />
           </Picker>
        </View>

        <Pressable style={styles.pressable} onPress={signUpUsers}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>

        <View style={styles.linkContainer}>
          <Text >Already have an account?</Text>
          <Link href={'./login'} style={styles.link}>Login</Link>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
