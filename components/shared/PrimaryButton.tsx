import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="w-full bg-[#C0A068] py-4 rounded-xl items-center justify-center shadow-sm"
      style={{
        shadowColor: "#C0A068",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4, // Android shadow
      }}
    >
      <Text className="text-white font-bold text-lg">{label}</Text>
    </TouchableOpacity>
  );
};
