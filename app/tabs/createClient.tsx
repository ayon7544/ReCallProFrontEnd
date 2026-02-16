import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

const createClients = () => {
  return (
    <View className="flex-1 bg-[#0F0B18]">
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 pt-8 pb-6 justify-center"></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default createClients;
