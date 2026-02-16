import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SubscriptionLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="subscriptions" />
      </Stack>
    </SafeAreaProvider>
  );
}
