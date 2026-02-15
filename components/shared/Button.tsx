import React from "react";
import { Pressable, Text } from "react-native";
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
  return (
    <Pressable
      onPress={!disabled ? onPress : undefined}
      className={`w-full rounded-2xl overflow-hidden ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {!disabled ? (
        <LinearGradient
          colors={["#C9A367", "rgba(208,170,105,0.7)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            paddingVertical: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-white text-base font-semibold">{label}</Text>
        </LinearGradient>
      ) : (
        <Text className="text-gray-400 text-base font-semibold py-4 text-center">
          {label}
        </Text>
      )}
    </Pressable>
  );
};
