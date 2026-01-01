import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";


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


export default function EventHome() {
  const params = useLocalSearchParams<{ eventId?: string }>();
  const eventId = params.eventId;

  const selectedEvent = events.find((e) => e.id === eventId);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Event Home</ThemedText>

      <ThemedText type="subtitle">
        {`Selected event ID: ${eventId ? eventId : "none"}`}
      </ThemedText>

      <ThemedText type="subtitle">
        {`Selected event name: ${selectedEvent ? selectedEvent.name : "none"}`}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
});
