import { View, Text, StyleSheet, Image } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { useRouter } from "expo-router";
import image from "../assets/logo.png";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Small image ABOVE title */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Noted</Text>

      <Text style={styles.subtitle}>
        Capture your thoughts, beautifully.
      </Text>

      <View style={styles.buttonGroup}>
        <PrimaryButton
          title="Sign Up"
          onPress={() => router.push("/auth/register")}
        />
        <PrimaryButton
          title="Login"
          onPress={() => router.push("/auth/login")}
          variant="outline"
        />
      </View>

      <Text style={styles.footer}>Simple. Minimal. Yours.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: 140,      // 👈 small image
    height: 140,
    marginBottom: 24,
  },

  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#000",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 40,
    textAlign: "center",
  },

  buttonGroup: {
    width: "100%",
    maxWidth: 620,
    gap: 14,
    marginBottom: 40,
  },

  footer: {
    fontSize: 14,
    color: "#777",
  },
});
