import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { getLoggedInUser } from "../storage/authStorage";

export default function Layout() {
  const router = useRouter();
  const segments = useSegments(); // ✅ no type casting needed
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const user = await getLoggedInUser();
      const currentSegments = segments as string[];

      // 1. ROOT ROUTE (/)
      if (currentSegments.length === 0) {
        if (user) router.replace("/notes/work");
        setLoading(false);
        return;
      }

      // 2. AUTH ROUTES
      if (currentSegments[0] === "auth") {
        if (user) router.replace("/notes/work");
        setLoading(false);
        return;
      }

      // 3. PROTECTED ROUTES
      const inAppGroup =
        currentSegments[0] === "notes" || currentSegments[0] === "profile";

      if (inAppGroup && !user) {
        router.replace("/");
      }

      setLoading(false);
    }

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
