import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NoteItem } from "../../components/NoteItem";
import { SearchBar } from "../../components/SearchBar";
import { CategoryFilter } from "../../components/CategoryFilter";
import { useRouter } from "expo-router";

export default function WorkNotes() {
  const router = useRouter();

  const dummyNotes = [
    { id: "1", title: "Meeting Notes", content: "Discuss project roadmap", category: "Work" },
    { id: "2", title: "Report", content: "Prepare quarterly report", category: "Work" },
  ];

  return (
    <View style={styles.container}>
      <SearchBar value="" onChangeText={() => {}} />

      <CategoryFilter
        selected="Work"
        onSelect={() => {}}
        categories={["All", "Work", "Study", "Personal"]}
      />

      <FlatList
        data={dummyNotes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onPress={() => router.push("/notes/edit")}
            onEdit={() => router.push("/notes/edit")}
            onDelete={() => {}}
          />
        )}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/notes/add")}
      >
        <Text style={styles.fabText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  fab: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },

  fabText: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 30,
  },
});

