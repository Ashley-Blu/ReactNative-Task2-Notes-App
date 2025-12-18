import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ title: "Back" }} />
      <Stack.Screen name="auth/register" options={{ title: "Back" }} />
      <Stack.Screen name="notes/work" options={{ title: "Work Notes" }} />
      <Stack.Screen name="notes/study" options={{ title: "Study Notes" }} />
      <Stack.Screen name="notes/personal" options={{ title: "Personal Notes" }} />
      <Stack.Screen name="notes/add" options={{ title: "Back" }} />
      <Stack.Screen name="notes/edit" options={{ title: "Edit Note" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
