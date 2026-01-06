import { useEffect, useState } from "react";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { Pressable, StyleSheet } from "react-native";

export default function HeadcountCard({ eventId }: { eventId: number | null }) {
  const [headCount, setHeadCount] = useState<number | null>(null);
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (eventId !== null) {
      handleCountFetch();
    }
  }, [eventId]);

  const handleCountFetch = () => {
    if (!eventId) return;

    setIsLoading(true);
    setErrors(null);
    setHeadCount(null);

    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        setHeadCount(42);
      } else {
        setErrors("Failed to load headcount");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <ThemedView style={styles.card}>
      <ThemedText type="subtitle">
        {eventId ? `Headcount for event ${eventId}` : "No event selected"}
      </ThemedText>
      {isLoading && <ThemedText>Loading headcount...</ThemedText>}

      {!isLoading && headCount !== null && (
        <ThemedText>Headcount: {headCount}</ThemedText>
      )}

      {!isLoading && errors && (
        <>
          <ThemedText>Failed to load headcount</ThemedText>
          <Pressable onPress={handleCountFetch}>
            <ThemedText type="subtitle">Retry</ThemedText>
          </Pressable>
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "#252525",

    // iOS shadow
    shadowColor: "#797979",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    // Android shadow
    elevation: 4,
  },
});
