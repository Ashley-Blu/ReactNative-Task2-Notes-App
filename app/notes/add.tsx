import { ScrollView } from "react-native";
import { NoteForm } from "../../components/NoteForm";

export default function AddNote() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <NoteForm categories={["Work", "Study", "Personal"]} onSave={() => {}} />
    </ScrollView>
  );
}
