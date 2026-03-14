import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import image from "../../assets/image.png";
import { PrimaryButton } from "../../components/PrimaryButton";
import { loginUser, registerUser } from "../../storage/authStorage";

export default function Register() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const isWeb = screenWidth >= 768;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const success = await registerUser({
        email,
        username: email.split("@")[0],
        password,
      });

      if (!success) {
        Alert.alert("Error", "An account with this email already exists.");
        return;
      }

      // Auto-login after registration
      await loginUser(email, password);

      router.replace("/notes/work");
    } catch (e) {
      Alert.alert("Error", "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      {/* LEFT: Welcome + Form */}
      <View style={[styles.formContainer, isWeb && styles.formContainerWeb]}>
        <Text style={styles.subtitle}>
          Welcome to <Text style={styles.bold}>Noted</Text>
        </Text>
        <Text style={styles.description}>
          Create an account and start organizing your thoughts.
        </Text>

        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <PrimaryButton
          title={loading ? "Creating Account..." : "Register"}
          onPress={handleRegister}
          disabled={loading}
        />

        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={styles.footerText}>
            Already have an account?
            <Text style={styles.link}> Login</Text>
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
