import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { getLoggedInUser } from "../storage/authStorage";
import { View, ActivityIndicator } from "react-native";

export default function Layout() {
  const router = useRouter();
  const segments = useSegments();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getLoggedInUser();
      const inAuthGroup = segments[0] === "auth";

      if (!user && !inAuthGroup) {
        router.replace("/auth/login");
      }

      if (user && inAuthGroup) {
        router.replace("/notes/work");
      }

      setLoading(false);
    };

    checkAuth();
  }, [segments]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/register" />
      <Stack.Screen name="notes/work" />
      <Stack.Screen name="notes/study" />
      <Stack.Screen name="notes/personal" />
      <Stack.Screen name="notes/add" />
      <Stack.Screen name="notes/edit" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
