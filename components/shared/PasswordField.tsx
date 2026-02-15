import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

interface PasswordProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="mb-6 w-full px-4">
      <Text className="text-white text-lg font-bold mb-3 ml-1">{label}</Text>
      <View className="bg-[#121217] border border-[#3a2d26] rounded-xl px-4 py-4 flex-row items-center">
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#7d848d"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          className="flex-1 text-white text-base"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Eye size={20} color="#7d848d" />
          ) : (
            <EyeOff size={20} color="#7d848d" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
