import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { PrimaryButton } from "./PrimaryButton";

interface Props {
  initialNote?: {
    title?: string;
    content: string;
    category: string;
  };
  categories: string[];
  onSave: (note: { title?: string; content: string; category: string }) => void;
  onDelete?: () => void;
}

export const NoteForm = ({ initialNote, categories, onSave, onDelete }: Props) => {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [content, setContent] = useState(initialNote?.content || "");
  const [category, setCategory] = useState(initialNote?.category || categories[0]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(cat => (
          <Text
            key={cat}
            style={[styles.category, category === cat && styles.selected]}
            onPress={() => setCategory(cat)}
          >
            {cat}
          </Text>
        ))}
      </View>

      <Text style={styles.label}>Title (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Content</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Write your note..."
        value={content}
        onChangeText={setContent}
        multiline
      />

      <PrimaryButton
        title="Save"
        onPress={() => onSave({ title, content, category })}
      />

      {onDelete && <PrimaryButton title="Delete" onPress={onDelete} />}
    </View>
  );
};

const styles = StyleSheet.create({
  label: { fontWeight: "bold", marginTop: 10, marginBottom: 5 },
  input: { backgroundColor: "#F3F4F6", padding: 10, borderRadius: 8, marginBottom: 10 },
  categoryContainer: { flexDirection: "row", gap: 10, marginBottom: 10 },
  category: { padding: 5, color: "#6B7280" },
  selected: { color: "#000000", fontWeight: "bold" },
});
