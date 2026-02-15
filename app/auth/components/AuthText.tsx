import React from "react";
import { View, Text } from "react-native";
import GoogleButton from "./GoogleButton";

interface AuthTextProps {
  title: string;
  description: string;
}

export const AuthText: React.FC<AuthTextProps> = ({ title, description }) => (
  <View className="items-center px-8 mt-5">
    <Text className="text-[28px] font-bold text-[#fff] text-center leading-9 mb-4">
      {title}
    </Text>
    <Text className="text-[#fff] text-base text-center leading-6 font-normal pb-4">
      {description}
    </Text>
  </View>
);

export default GoogleButton;
