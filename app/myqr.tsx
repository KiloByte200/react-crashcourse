import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Pressable, StyleSheet } from "react-native";

export default function MyQR({
  token,
  onStartOver,
}: {
  token: string;
  onStartOver: () => Promise<void>;
}) {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.container}>
        <ThemedText type="title">MyQR</ThemedText>
        <ThemedText type="subtitle">{`Your QR token: ${
          token ?? "none"
        }`}</ThemedText>
        <Pressable onPress={onStartOver}>
          <ThemedText type="subtitle">Start Over</ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    flex: 1,
  },
});
