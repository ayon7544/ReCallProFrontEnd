import React from "react";
import { View, Text } from "react-native";

interface NotesTabProps {
  notes: {
    email: string;
    phoneNumber: string;
    preferences: string;
    totalSpent: number;
  };
}

const NotesTab: React.FC<NotesTabProps> = ({ notes }) => {
  return (
    <View className="flex-1  p-4">
      {/* Contact Information Card */}
      <View className="bg-[#101012] border border-[#4F4F59] rounded-2xl p-5 mb-4">
        <Text className="text-white text-xl font-semibold mb-6">
          Contact Information
        </Text>

        <View className="flex-row justify-between mb-5">
          <Text className="text-[#71717A] text-base">Phone</Text>
          <Text className="text-white text-base">{notes.phoneNumber}</Text>
        </View>

        <View className="flex-row justify-between mb-5">
          <Text className="text-[#71717A] text-base">Email</Text>
          <Text className="text-white text-base">{notes.email}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-[#71717A] text-base">Total Spent</Text>
          <Text className="text-[#C5A059] text-base font-semibold">
            ${notes.totalSpent}
          </Text>
        </View>
      </View>

      {/* Preferences & Notes Card */}
      <View className="bg-[#101012] border border-[#4F4F59] rounded-2xl p-5">
        <Text className="text-white text-base mb-2">Preferences & Notes</Text>
        <Text className="text-[#71717A] text-base leading-5">
          {notes.preferences}
        </Text>
      </View>
    </View>
  );
};

export default NotesTab;
