import "../global.css";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "@/components/initial/Splashscreen";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { useFonts } from "expo-font";
import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ExpoSplashScreen from "expo-splash-screen";

ExpoSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  const [showSplash, setShowSplash] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Inter_600SemiBold,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (fontError) {
      console.error("Error loading fonts:", fontError);
      throw fontError;
    }
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Push route once everything is ready
  useEffect(() => {
    if (fontsLoaded && minTimeElapsed && !showSplash && !hasNavigated) {
      setHasNavigated(true);
      router.replace("/auth/register"); // use replace to avoid back navigation to splash
    }
  }, [fontsLoaded, minTimeElapsed, showSplash, hasNavigated, router]);

  if (!fontsLoaded || !minTimeElapsed || showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <AlertNotificationRoot
        theme="dark"
        toastConfig={{
          autoClose: 4000,
          titleStyle: {
            fontSize: 16,
            fontWeight: "600",
          },
          textBodyStyle: {
            fontSize: 14,
            fontWeight: "400",
          },
        }}
        colors={[
          {
            label: "#1f2937",
            card: "#ffffff",
            overlay: "rgba(0,0,0,0.6)",
            success: "#10b981",
            danger: "#ef4444",
            warning: "#f59e0b",
            info: "#3b82f6",
          },
          {
            label: "#f9fafb",
            card: "#1f2937",
            overlay: "rgba(0,0,0,0.8)",
            success: "#22c55e",
            danger: "#f87171",
            warning: "#fbbf24",
            info: "#60a5fa",
          },
        ]}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#fff" },
            animation: "slide_from_right",
          }}
        />
      </AlertNotificationRoot>
    </>
  );
}
