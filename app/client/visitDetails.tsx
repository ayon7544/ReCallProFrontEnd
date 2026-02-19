import { View, KeyboardAvoidingView } from "react-native";
import React from "react";
import Header from "@/components/shared/Header";
import ServiceDetails from "@/components/client/ServiceDetails";
import { useLocalSearchParams } from "expo-router";;
const visitDetails = () => {
  const { id, date } = useLocalSearchParams<{ id: string; date: string }>();
  console.log(id, date);

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <View className="flex-row justify-between items-center pt-8 px-4">
        <Header title={date} />
      </View>
      <ServiceDetails id={id} />
    </View>
  );
};

export default visitDetails;
