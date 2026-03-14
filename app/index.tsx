import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import image from "../assets/logo.png";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Noted</Text>
      <Text style={styles.subtitle}>Capture your thoughts, beautifully.</Text>

      <View style={styles.buttonGroup}>
        <PrimaryButton
          title="Get Started"
          onPress={() => router.push("/auth/login")}
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
    width: 140,
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
