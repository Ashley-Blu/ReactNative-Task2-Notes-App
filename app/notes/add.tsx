import { useRouter } from "expo-router";
import { Alert, ScrollView } from "react-native";
import { NoteForm } from "../../components/NoteForm";
import { addNote, NoteCategory, StoredNote } from "../../storage/notesStorage";

export default function AddNote() {
  const router = useRouter();

  const handleSave = async (note: {
    title?: string;
    content: string;
    category: string;
  }) => {
    const trimmedContent = note.content.trim();

    if (!trimmedContent) {
      Alert.alert("Validation", "Content cannot be empty.");
      return;
    }

    const newNote: StoredNote = {
      id: Date.now().toString(),
      title: (note.title ?? "").trim(),
      content: trimmedContent,
      category: note.category as NoteCategory,
      createdAt: new Date().toISOString(),
    };

    await addNote(newNote);
    router.back();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <NoteForm
        categories={["Work", "Study", "Personal"]}
        onSave={handleSave}
      />
    </ScrollView>
  );
}
