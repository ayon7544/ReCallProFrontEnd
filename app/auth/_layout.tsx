import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="otpVerification" />
        <Stack.Screen name="emailConfirmation" />
        <Stack.Screen name="passwordOtpVerification" />
        <Stack.Screen name="changePassword" />
      </Stack>
    </SafeAreaProvider>
  );
}
