import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useRouter } from "expo-router";
import image from "../../assets/image.png";

export default function Login() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const isWeb = screenWidth >= 768;

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      {/* LEFT: Text + Form */}
      <View style={[styles.formContainer, isWeb && styles.formContainerWeb]}>
        {/* Welcome text ABOVE form */}
        <Text style={styles.subtitle}>
          Welcome back to <Text style={styles.bold}>Noted</Text>.
        </Text>
        <Text style={styles.description}>
          Sign in to access your notes.
        </Text>

        <Text style={styles.title}>Login</Text>

        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        <PrimaryButton title="Sign In" onPress={() => {}} />

        <TouchableOpacity onPress={() => router.push("/auth/register")}>
          <Text style={styles.footerText}>
            Don't have an account?
            <Text style={styles.link}> Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* RIGHT: Image (web only) */}
      {isWeb && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
  },

  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  formContainerWeb: {
    marginRight: 60,
  },

  subtitle: {
    fontSize: 18,
    color: "#000",
    marginBottom: 4,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 15,
    color: "#000",
  },

  footerText: {
    marginTop: 16,
    color: "#000",
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },

  imageContainer: {
    flex: 1,
    maxWidth: 500,
    height: "80%",
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
