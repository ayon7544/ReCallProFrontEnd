import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import Header from "@/components/shared/Header";
const profileSetting = () => {
  return (
    <View className="flex-1 bg-[#0F0918]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 items-center">
          <Header title="Profile Setting" />

        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default profileSetting;
