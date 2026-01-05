import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router"
import { StyleSheet } from "react-native";

export default function MyQR(){
    const params = useLocalSearchParams<{token?: string}>();
    const token = params.token;

    return(
        <ThemedView style={styles.container}>
            <ThemedText type="title">MyQR</ThemedText>
            <ThemedText type="subtitle">{`Token: ${token ?? "none"}`}</ThemedText>
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