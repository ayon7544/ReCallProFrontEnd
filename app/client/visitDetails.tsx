import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import Header from "@/components/shared/Header";
import ServiceDetails from "@/components/client/ServiceDetails";
const visitDetails = () => {
  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <View className="flex-row justify-between items-center pt-8 px-4">
          <Header title="new" />
        </View>
        <ServiceDetails id="1"/>
      </KeyboardAvoidingView>
    </View>
  );
};

export default visitDetails;
