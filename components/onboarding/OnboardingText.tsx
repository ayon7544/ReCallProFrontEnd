import React from "react";
import { View, Text } from "react-native";

interface OnboardingTextProps {
  title: string;
  description: string;
}

export const OnboardingText: React.FC<OnboardingTextProps> = ({
  title,
  description,
}) => (
  <View className="items-center px-8 mt-5">
    <Text className="text-white text-3xl font-bold text-center">{title}</Text>
    <Text className="text-white/80 text-base text-center mt-3 leading-6">
      {description}
    </Text>
  </View>
);
