import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getLoggedInUser } from "../storage/authStorage";

export default function Layout() {
  const router = useRouter();
  const segments = useSegments();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const user = await getLoggedInUser();
      const currentSegments = segments as string[];

      const first = currentSegments[0];
      const inAuth = first === "auth";
      const inProtected = first === "notes" || first === "profile";
      const inLanding = first === "index" || currentSegments.length === 0;

      // Unauthenticated users cannot access protected routes
      if (inProtected && !user) {
        router.replace("/auth/login");
        setLoading(false);
        return;
      }

      // Authenticated users should not see landing/auth screens
      if (user && (inAuth || inLanding)) {
        router.replace("/notes/work");
        setLoading(false);
        return;
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
    <Stack screenOptions={{ headerShown: false }} />
  );
}
