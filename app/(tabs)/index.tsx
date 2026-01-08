// import { Image } from "expo-image";
// import { StyleSheet } from "react-native";

// import { HelloWave } from "@/components/hello-wave";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

// import HelloCard from "@/components/HelloCard";
import EventList from "../event-list";
import Register from "../register";
import { Platform } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import MyQR from "../myqr";

export default function HomeScreen() {
  const [token, setToken] = useState<string | null>(null);
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const boot = async () => {
      await getToken();
      setIsBooting(false);
    };

    boot();
  }, []);

  const storeToken = async (newToken: string) => {
    //if statement below just for web demonstration
    if (Platform.OS === "web") {
      localStorage.setItem("qrToken", newToken);
      setToken(newToken);
      return;
    }
    await SecureStore.setItemAsync("qrToken", newToken);
    setToken(newToken);
  };

  const getToken = async () => {
    //if statement below just for web demonstration
    if (Platform.OS === "web") {
      const storedToken = localStorage.getItem("qrToken");
      setToken(storedToken);
      return;
    }
    const storedToken = await SecureStore.getItemAsync("qrToken");
    setToken(storedToken);
  };

  const resetToken = async () => {
    //if statement below just for web demonstration
    if (Platform.OS === "web") {
      localStorage.removeItem("qrToken");
      setToken(null);
      return;
    }
    await SecureStore.deleteItemAsync("qrToken");
    setToken(null);
  };

  if (isBooting) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemedText>Loading...</ThemedText>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Staff Check-in <HelloWave />
        </ThemedText>
        <ThemedText type="subtitle">By Giovanni Iervolino</ThemedText>
        <HelloCard name="Giovanni" />
      </ThemedView> */}
      <ThemedView style={{ flex: 1 }}>
        {/* <EventList /> */}
        {token ? (
          <MyQR token={token} onStartOver={resetToken} />
        ) : (
          <Register onSuccess={storeToken} />
        )}
      </ThemedView>
    </SafeAreaView>
  );
}
