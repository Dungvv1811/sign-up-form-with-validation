import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Sign Up" }} />
      <Stack.Screen name="confirmation" options={{ title: "Done" }} />
    </Stack>
  );
}