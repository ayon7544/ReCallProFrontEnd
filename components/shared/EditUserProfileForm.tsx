import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const FLAG_EMOJI = "🇺🇸";

export default function EditUserProfileForm() {
  const [name, setName] = useState("Nick");
  const [phone, setPhone] = useState("02-8312024");
  const [location, setLocation] = useState("123 Main St, New York");
  const [countryCode, setCountryCode] = useState("+1");

  return (
    <SafeAreaView className="flex-1 bg-[#0E0E0E]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        className="flex-1  pt-10"
        keyboardShouldPersistTaps="handled"
      >
        {/* Avatar */}
        <View className="items-center mb-10">
          <View className="relative w-24 h-24">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              className="w-24 h-24 rounded-full border-2 border-[#C9A96E]"
            />
            <TouchableOpacity
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#C9A96E] items-center justify-center shadow-md"
              activeOpacity={0.8}
            >
              <Text className="text-[#0E0E0E] text-base">📷</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Your Name */}
        <View className="mb-6">
          <Text className="text-white text-base font-semibold mb-2">
            Your Name
          </Text>
          <View className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholderTextColor="#555"
              className="text-white text-base"
              style={{ color: "#fff" }}
            />
          </View>
        </View>

        {/* Mobile Number */}
        <View className="mb-6">
          <Text className="text-white text-base font-semibold mb-2">
            Mobile Number
          </Text>
          <View className="flex-row items-center rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3">
            {/* Country selector */}
            <TouchableOpacity
              className="flex-row items-center mr-3"
              activeOpacity={0.7}
            >
              <Text className="text-lg mr-1">{FLAG_EMOJI}</Text>
              <Text className="text-white text-sm mr-1">{countryCode}</Text>
              <Text className="text-[#888] text-xs">▼</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="w-px h-5 bg-[#333] mr-3" />

            <TextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#555"
              className="flex-1 text-white text-base"
              style={{ color: "#fff" }}
            />
          </View>
        </View>

        {/* Location */}
        <View className="mb-10">
          <Text className="text-white text-base font-semibold mb-2">
            Location
          </Text>
          <View className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3">
            <TextInput
              value={location}
              onChangeText={setLocation}
              placeholderTextColor="#555"
              className="text-white text-base"
              style={{ color: "#fff" }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Save Button */}
      <View className="px-5 pb-8">
        <TouchableOpacity
          className="bg-[#C9A96E] rounded-2xl py-4 items-center shadow-lg"
          activeOpacity={0.85}
        >
          <Text className="text-[#0E0E0E] text-base font-bold tracking-widest uppercase">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
