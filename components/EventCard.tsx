import {ThemedView} from "@/components/themed-view";
import {ThemedText} from "@/components/themed-text";
import {StyleSheet} from "react-native";

export default function EventCard({name, date, location, isPressed}: {name: string; date: string; location: string; isPressed?: boolean}) {
    return(
        <ThemedView style={[styles.card, isPressed && styles.selectedCard]}>
            <ThemedText type = "title">{name}</ThemedText>
            <ThemedText type = "subtitle">{location} - {date}</ThemedText>
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
  selectedCard: {
    borderWidth: 2,
    borderColor: '#58F4FF',

    // iOS shadow (lift card)
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,

    // Android shadow (lift card)
    elevation: 6,

  }

});