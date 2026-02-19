import { Stack } from "expo-router";
export default function ClientLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="clientProfile" />
      <Stack.Screen name="visitDetails" />
      <Stack.Screen name="editProfile" />
    </Stack>
  );
}
