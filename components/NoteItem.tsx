import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { StoredNote } from "../storage/notesStorage";

type Props = {
  note: StoredNote;
  onPress: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function NoteItem({ note, onPress, onEdit, onDelete }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{note.title || "Untitled"}</Text>

        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity onPress={onEdit}>
              <Text style={styles.action}>Edit</Text>
            </TouchableOpacity>
          )}

          {onDelete && (
            <TouchableOpacity onPress={onDelete}>
              <Text style={[styles.action, styles.delete]}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Text style={styles.content}>{note.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    marginTop: 6,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  action: {
    fontSize: 13,
    color: "#000",
    textDecorationLine: "underline",
  },
  delete: {
    color: "#DC2626",
  },
});
