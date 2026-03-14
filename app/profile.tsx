import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import {
    getLoggedInUser,
    logoutUser,
    StoredUser,
} from "../storage/authStorage";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    async function loadUser() {
      const current = await getLoggedInUser();
      setUser(current);
    }

    loadUser();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>
        Email: {user?.email ?? "Unknown"}
      </Text>
      <Text style={styles.info}>
        Username: {user?.username ?? "Unknown"}
      </Text>

      <View style={styles.buttonWrapper}>
        <PrimaryButton title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginTop: 24,
    width: "80%",
    maxWidth: 320,
  },
});
