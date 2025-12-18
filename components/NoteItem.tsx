import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Note {
  id: string;
  category: string;
  title?: string;
  content: string;
}

interface Props {
  note: Note;
  onPress: () => void;
}

export const NoteItem = ({ note, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {note.title && <Text style={styles.title}>{note.title}</Text>}
      <Text style={styles.content}>{note.content}</Text>
      <Text style={styles.category}>{note.category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  content: { fontSize: 14, color: "#374151" },
  category: { marginTop: 5, fontSize: 12, color: "#6B7280" },
});
