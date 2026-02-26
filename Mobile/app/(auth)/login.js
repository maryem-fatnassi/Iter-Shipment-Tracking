// import { styles } from "@/styles/auth.styles";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styles } from "../../styles/auth.styles";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function loginUser() {
    try {
      console.log({ email, password });
      const response = await fetch("http://192.168.1.9:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if(response.ok){
        router.replace("/DashboardScreenRoute");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loginUser();
  }, []);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>LogIn</Text>

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
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <Pressable style={styles.pressable} onPress={loginUser}>
          <Text style={styles.btnText}>LogIn</Text>
        </Pressable>

        <View style={styles.linkContainer}>
          <Text>{`Don't have an account?`}</Text>
          <Link href="/signUp" style={styles.link}>
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
