// import { Image } from "expo-image";
// import { StyleSheet } from "react-native";

// import { HelloWave } from "@/components/hello-wave";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

// import HelloCard from "@/components/HelloCard";
import EventList from "../event-list";
import Register from "../register";
import { useState } from "react";
import MyQR from "../myqr";

export default function HomeScreen() {
  const [token, setToken] = useState<string | null>(null);

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
          <MyQR token={token} onStartOver={() => setToken(null)} />
        ) : (
          <Register onSuccess={setToken} />
        )}
      </ThemedView>
    </SafeAreaView>
  );
}
