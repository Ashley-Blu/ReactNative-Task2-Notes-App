import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    Text,
    View,
} from "react-native";
import { NoteForm } from "../../components/NoteForm";
import {
    deleteNote,
    getNotes,
    NoteCategory,
    StoredNote,
    updateNote,
} from "../../storage/notesStorage";

export default function EditNote() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const [note, setNote] = useState<StoredNote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNote() {
      const idParam = params.id;

      if (!idParam || Array.isArray(idParam)) {
        setLoading(false);
        return;
      }

      const allNotes = await getNotes();
      const found = allNotes.find((n) => n.id === idParam) || null;
      setNote(found);
      setLoading(false);
    }

    loadNote();
  }, [params.id]);

  const handleSave = async (updated: {
    title?: string;
    content: string;
    category: string;
  }) => {
    if (!note) return;

    const trimmedContent = updated.content.trim();
    if (!trimmedContent) {
      Alert.alert("Validation", "Content cannot be empty.");
      return;
    }

    const updatedNote: StoredNote = {
      ...note,
      title: (updated.title ?? "").trim(),
      content: trimmedContent,
      category: updated.category as NoteCategory,
    };

    await updateNote(updatedNote);
    router.back();
  };

  const handleDelete = async () => {
    if (!note) return;

    Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteNote(note.id);
          router.back();
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!note) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>No note found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <NoteForm
        initialNote={{
          title: note.title,
          content: note.content,
          category: note.category,
        }}
        categories={["Work", "Study", "Personal"]}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </ScrollView>
  );
}
