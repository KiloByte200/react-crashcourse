import EventCard from "@/components/EventCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput } from "react-native";

const events = [
  {
    id: "1",
    name: "Volunteer Orientation",
    date: "Jan 15, 2025",
    location: "Rush Building",
  },
  {
    id: "2",
    name: "Community Outreach",
    date: "Jan 18, 2025",
    location: "West Philly",
  },
  {
    id: "3",
    name: "Hack4Impact Workshop",
    date: "Jan 22, 2025",
    location: "LeBow Hall",
  },
  {
    id: "4",
    name: "Nonprofit Partner Meeting",
    date: "Jan 25, 2025",
    location: "Zoom",
  },
  {
    id: "5",
    name: "Frontend Sync",
    date: "Jan 28, 2025",
    location: "MacAlister Hall",
  },
  {
    id: "6",
    name: "Semester Kickoff",
    date: "Feb 1, 2025",
    location: "Main Auditorium",
  },
];

export default function EventList() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const selectedEvent = events.find((event) => event.id === selectedEventId);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGoToEventHome = () => {
    // If nothing is selected, still navigate, but pass nothing
    // You could also block navigation here instead, but this is simplest and safe.
    if (!selectedEventId) {
      router.push("/event-home");
      return;
    }

    // Pass the selected event id as a route param
    router.push({
      pathname: "/event-home",
      params: { eventId: selectedEventId },
    });
  };

  const filteredEvents =
    searchQuery.trim().length === 0
      ? events
      : events.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          {`Selected: ${selectedEvent ? selectedEvent.name : "none"}`}
        </ThemedText>
        <TextInput
          style={[styles.searchInput, { color: "#fff" }]}
          placeholder="Search events..."
          placeholderTextColor="#9a9a9a"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <Pressable
          onPress={handleGoToEventHome}
          disabled={!selectedEventId}
          style={({ pressed }) => [
            styles.goButton,
            !selectedEventId && styles.goButtonDisabled,
            pressed && selectedEventId && styles.goButtonPressed,
          ]}
        >
          <ThemedText type="subtitle">Go to Event Home</ThemedText>
        </Pressable>
      </ThemedView>

      <FlatList
        style={{ flex: 1 }}
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<ThemedText>No events available</ThemedText>}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelectedEventId(item.id)}>
            <EventCard
              name={item.name}
              date={item.date}
              location={item.location}
              isPressed={item.id === selectedEventId}
            />
          </Pressable>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    //flexDirection: 'row',
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 12,
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  goButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  goButtonPressed: {
    opacity: 0.8,
  },
  goButtonDisabled: {
    opacity: 0.5,
  },
  listContent: {
    paddingBottom: 100,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
  },
});
