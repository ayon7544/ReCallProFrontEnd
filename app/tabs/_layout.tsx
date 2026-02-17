import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View className="absolute bottom-6 left-5 right-5 flex-row items-center justify-around px-2">
      <View
        className="absolute inset-0 rounded-3xl"
        style={{
          // backgroundColor: "#1a1a1a",
          // borderWidth: 1,
          // borderColor: "#333",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        }}
      />
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = options.title || route.name;

        // --- Center Floating Button ---
        if (route.name === "createClient") {
          return (
            <View
              key={route.key}
              className="relative items-center justify-center z-10"
            >
              <View
                className="w-[65px] h-[65px] bg-[#080808] rounded-full items-center justify-center -top-10"
                style={{
                  shadowColor: "#C9A367",
                  shadowOffset: { width: 10, height: 8 },
                  shadowOpacity: 0.4,
                  shadowRadius: 16,
                  elevation: 6,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate(route.name)}
                  activeOpacity={0.9}
                  className="w-[50px] h-[50px] bg-[#C9A367] rounded-full items-center justify-center"
                  style={{
                    // Add additional glow to the button itself
                    shadowColor: "#C9A367",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.5,
                    shadowRadius: 12,
                    elevation: 0,
                  }}
                >
                  <View className="w-9 h-9 rounded-full border-[2px] border-black/80 items-center justify-center">
                    <Ionicons name="add" size={26} color="rgba(0,0,0,0.85)" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }

        // --- Standard Tabs ---
        let iconName: any;
        switch (route.name) {
          case "home":
            iconName = "home";
            break;
          case "clients":
            iconName = "people";
            break;
          case "analytics":
            iconName = "stats-chart";
            break;
          case "settings":
            iconName = "settings";
            break;
          default:
            iconName = "ellipse";
        }

        const tintColor = isFocused ? "#c4a46a" : "#888";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            className="flex-1 items-center justify-center  z-10"
          >
            <Ionicons
              name={isFocused ? iconName : `${iconName}-outline`}
              size={26}
              color={tintColor}
            />
            <Text
              style={{
                color: tintColor,
                fontSize: 11,
                marginTop: 4,
                fontWeight: isFocused ? "600" : "400",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
// 2. The Main Layout (The Default Export)
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: "none" }, // Completely hides the default bar
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="clients" options={{ title: "Clients" }} />
      <Tabs.Screen name="createClient" options={{ title: "" }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
