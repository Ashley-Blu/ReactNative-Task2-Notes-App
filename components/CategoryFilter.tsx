import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
  categories: string[];
}

export const CategoryFilter = ({ selected, onSelect, categories }: Props) => {
  return (
    <View style={styles.container}>
      {categories.map(cat => (
        <TouchableOpacity key={cat} onPress={() => onSelect(cat)}>
          <Text style={[styles.text, selected === cat && styles.selected]}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 10,
  },
  text: {
    color: "#6B7280",
    fontWeight: "500",
  },
  selected: {
    color: "#000000",
    fontWeight: "bold",
  },
});
