import React from "react";
import { View, Text, TextInput } from "react-native";
import { useState } from "react";
interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const TextField: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="mb-5 w-full">
      <Text className="text-white text-base font-bold mb-2 ml-1">{label}</Text>
      <View
        className={`${
          isFocused ? "bg-[#121217]" : ""
        } border border-[#C9A367] rounded-xl px-4`}
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#fff"
          value={value}
          onChangeText={onChangeText}
          keyboardType="default"
          autoCapitalize="words"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-white text-base"
        />
      </View>
    </View>
  );
};
