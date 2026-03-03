import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "solid" | "outline";
  disabled?: boolean;
};

export function PrimaryButton({
  title,
  onPress,
  variant = "solid",
  disabled = false,
}: Props) {
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOutline && styles.outline,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          isOutline && styles.outlineText,
          disabled && styles.disabledText,
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
    borderRadius: 4,
    backgroundColor: "#000",
    alignItems: "center",
    marginBottom: 12,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#000",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  outlineText: {
    color: "#000",
  },
  disabledText: {
    color: "#FFF",
  },
});
