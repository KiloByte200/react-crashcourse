import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";

export default function HelloCard({ name }: { name: string }) {
  return (
    <ThemedView>
      <ThemedText style={styles.card}>Hello, {name}!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#252525",

    // iOS shadow
    shadowColor: "#797979",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    // Android shadow
    elevation: 4,
  },
});
