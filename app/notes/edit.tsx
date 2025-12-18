import { ScrollView } from "react-native";
import { NoteForm } from "../../components/NoteForm";

export default function EditNote() {
  const dummyNote = {
    id: "1",
    title: "Sample Note",
    content: "This is a sample note.",
    category: "Work",
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <NoteForm initialNote={dummyNote} categories={["Work", "Study", "Personal"]} onSave={() => {}} onDelete={() => {}} />
    </ScrollView>
  );
}
