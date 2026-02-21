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
import * as NavigationBar from "expo-navigation-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, Platform } from "react-native";

ExpoSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
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
    if (Platform.OS === "android") {
      async function configureNavigationBar() {
        await NavigationBar.setButtonStyleAsync("light");
      }

      configureNavigationBar();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || !minTimeElapsed || showSplash) {
    return (
      <SafeAreaProvider>
        <StatusBar
          style="light"
          translucent={true}
          backgroundColor="transparent"
        />

        <SplashScreen onFinish={() => setShowSplash(false)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom * 0.5,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: "#0F0B18",
        }}
      >
        <StatusBar
          style="light"
          translucent={true}
          backgroundColor="transparent"
        />

        <AlertNotificationRoot theme="dark">
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#000000" },
              animation: "slide_from_right",
            }}
          />
        </AlertNotificationRoot>
      </View>
    </SafeAreaProvider>
  );
}
