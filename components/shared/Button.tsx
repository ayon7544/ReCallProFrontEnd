import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
}) => {
  const gradientColors = disabled
    ? ["#E5E5E5", "#E5E5E5"] // solid gray when disabled
    : ["#C9A367", "rgba(208,170,105,0.7)"];

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      className="w-full rounded-2xl overflow-hidden"
      style={({ pressed }) => [
        {
          opacity: pressed && !disabled ? 0.8 : 1,
        } as ViewStyle,
      ]}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          paddingVertical: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          className={`text-base font-semibold ${
            disabled ? "text-gray-500" : "text-white"
          }`}
        >
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};