import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline";
  style?: ViewStyle;
};

export function PrimaryButton({
  title,
  onPress,
  variant = "primary",
  style,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        variant === "outline" && styles.outline,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "outline" && styles.outlineText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 6,
    backgroundColor: "#a9782b",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  outline: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#000",
  },
  outlineText: {
    color: "#000",
  },
});
