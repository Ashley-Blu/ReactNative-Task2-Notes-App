import { View, FlatList } from "react-native";
import { NoteItem } from "../../components/NoteItem";
import { SearchBar } from "../../components/SearchBar";
import { CategoryFilter } from "../../components/CategoryFilter";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useRouter } from "expo-router";

export default function WorkNotes() {
  const router = useRouter();

  const dummyNotes = [
    { id: "1", title: "Meeting Notes", content: "Discuss project roadmap", category: "Work" },
    { id: "2", title: "Report", content: "Prepare quarterly report", category: "Work" },
  ];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <SearchBar value="" onChangeText={() => {}} />
      <CategoryFilter
        selected="Study"
        onSelect={() => {}}
        categories={["All", "Work", "Study", "Personal"]}
      />
      <FlatList
        data={dummyNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem note={item} onPress={() => router.push("/notes/edit")} />
        )}
      />
      <PrimaryButton title="+ Add Note" onPress={() => router.push("/notes/add")} />
    </View>
  );
}
