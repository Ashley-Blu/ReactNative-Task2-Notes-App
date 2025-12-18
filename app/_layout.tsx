import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false}} />
      <Stack.Screen name="auth/register" options={{ headerShown: false }} />
      <Stack.Screen name="notes/work" options={{ headerShown: false }} />
      <Stack.Screen name="notes/study" options={{ headerShown: false }} />
      <Stack.Screen name="notes/personal" options={{ headerShown: false }} />
      <Stack.Screen name="notes/add" options={{ headerShown: false }} />
      <Stack.Screen name="notes/edit" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
}
