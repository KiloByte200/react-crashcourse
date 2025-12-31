import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";
import { FlatList, StyleSheet } from "react-native";
import EventCard from "@/components/EventCard";

const events = [
  {
    id: '1',
    name: 'Volunteer Orientation',
    date: 'Jan 15, 2025',
    location: 'Rush Building',
  },
  {
    id: '2',
    name: 'Community Outreach',
    date: 'Jan 18, 2025',
    location: 'West Philly',
  },
  {
    id: '3',
    name: 'Hack4Impact Workshop',
    date: 'Jan 22, 2025',
    location: 'LeBow Hall',
  },
  {
    id: '4',
    name: 'Nonprofit Partner Meeting',
    date: 'Jan 25, 2025',
    location: 'Zoom',
  },
  {
    id: '5',
    name: 'Frontend Sync',
    date: 'Jan 28, 2025',
    location: 'MacAlister Hall',
  },
  {
    id: '6',
    name: 'Semester Kickoff',
    date: 'Feb 1, 2025',
    location: 'Main Auditorium',
  },
];

export default function EventList(){
    return(
        <ThemedView>
            {/* .map version commented out below */}
            {/* {events.length === 0 ? (
                <ThemedText>No events available</ThemedText>
            ) :
                (events.map(even =>(
                    <EventCard
                        key={even.id}
                        name={even.name}
                        date={even.date}
                        location={even.location}
                    />
                ))
           )} */}
            <FlatList
                data = {events}
                renderItem = {({item}) => (
                    <EventCard
                        name={item.name}
                        date={item.date}
                        location={item.location}
                    />
                )}
                keyExtractor = {(item) => item.id}
                ListEmptyComponent={<ThemedText>No events available</ThemedText>}
            />
        </ThemedView>
    );
};

