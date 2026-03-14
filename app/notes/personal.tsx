import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CategoryFilter } from "../../components/CategoryFilter";
import { NoteItem } from "../../components/NoteItem";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SearchBar } from "../../components/SearchBar";
import {
    deleteNote,
    getNotes,
    StoredNote,
} from "../../storage/notesStorage";

const CATEGORIES = ["All", "Work", "Study", "Personal"] as const;

export default function PersonalNotes() {
  const router = useRouter();

  const [notes, setNotes] = useState<StoredNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Personal");

  const loadNotes = useCallback(async () => {
    try {
      setLoading(true);
      const allNotes = await getNotes();
      setNotes(allNotes);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [loadNotes])
  );

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    await loadNotes();
  };

  const filteredNotes = notes.filter((note) => {
    const matchesCategory =
      selectedCategory === "All" || note.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (note.title && note.title.toLowerCase().includes(query)) ||
      note.content.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  if (loading && notes.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <CategoryFilter
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        categories={CATEGORIES as unknown as string[]}
      />
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Create your first one.</Text>
        }
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onPress={() =>
              router.push({ pathname: "/notes/edit", params: { id: item.id } })
            }
            onEdit={() =>
              router.push({ pathname: "/notes/edit", params: { id: item.id } })
            }
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
      <PrimaryButton
        title="+ Add Note"
        onPress={() => router.push("/notes/add")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  emptyText: {
    marginTop: 24,
    textAlign: "center",
    color: "#6B7280",
  },
});
