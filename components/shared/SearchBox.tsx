import React from "react";
import { View, TextInput } from "react-native";
import { Search } from "lucide-react-native";

interface SearchBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitSearch: () => void;
}

const SearchBox = ({
  placeholder,
  value,
  onChangeText,
  onSubmitSearch,
}: SearchBoxProps) => {
  return (
    <View className="flex-row items-center px-4 h-16 border border-[#4F4F59] rounded-2xl">
      <Search size={22} color="#C9A367" className="mr-2" />
      <TextInput
        className="flex-1 text-[#C9A367] text-lg h-full"
        placeholder={placeholder}
        placeholderTextColor="#3f3f46"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitSearch}
        returnKeyType="search" 
        cursorColor="#C9A367"
        selectionColor="#6366f1"
        autoCapitalize="none"
      />
    </View>
  );
};

export default SearchBox;
