import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useEffect } from "react";
import { COUNTRY_CODES } from "@/constants/PhoneNumberDatabase";
interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const MobileNumberInput: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCode, setSelectedCode] = useState(COUNTRY_CODES[17]); // Bangladesh default
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = COUNTRY_CODES.filter(
    (item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.includes(searchQuery),
  );

  const handleSelectCode = (item: (typeof COUNTRY_CODES)[0]) => {
    setSelectedCode(item);
    setModalVisible(false);
    setSearchQuery("");
  };

  return (
    <View className="mb-5 w-full">
      <Text className="text-white text-base font-bold mb-2 ml-1">{label}</Text>
      <View
        className={`${
          isFocused ? "bg-[#121217]" : "bg-[]"
        } border border-[#C9A367] rounded-xl px-4 py-2 flex-row items-center`}
      >
        {/* Country Code Selector */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="flex-row items-center mr-2 pr-2 border-r border-[#C9A367]"
        >
          <Text className="text-base mr-1">{selectedCode.flag}</Text>
          <Text className="text-white text-base font-medium">
            {selectedCode.code}
          </Text>
          <Text className="text-white text-xs ml-1">▼</Text>
        </TouchableOpacity>

        {/* Phone Number Input */}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="white"
          value={value}
          onChangeText={onChangeText}
          keyboardType="phone-pad"
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="text-white text-base flex-1"
        />
      </View>

      {/* Country Code Modal */}
      {/* Country Code Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-[#121217] rounded-t-3xl h-[80%]">
            <View className="p-4 border-b border-[#2a2a2f]">
              <Text className="text-white text-lg font-bold text-center mb-3">
                Select Country Code
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSearchQuery("");
                }}
                className="absolute right-4 top-4"
              >
                <Text className="text-[#7d848d] text-2xl">×</Text>
              </TouchableOpacity>

              {/* Search Input */}
              <TextInput
                placeholder="Search country..."
                placeholderTextColor="#7d848d"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="bg-[#1a1a1f] border border-[#C9A367] rounded-xl px-4 py-3 text-white text-base"
              />
            </View>

            <FlatList
              data={filteredCountries}
              keyExtractor={(item, index) => `${item.code}-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectCode(item)}
                  className={`p-4 border-b border-[#2a2a2f] flex-row items-center ${
                    selectedCode.code === item.code ? "bg-[#1a1a1f]" : ""
                  }`}
                >
                  <Text className="text-2xl mr-3">{item.flag}</Text>
                  <View className="flex-1">
                    <Text className="text-white text-base font-medium">
                      {item.country}
                    </Text>
                  </View>
                  <Text className="text-[#7d848d] text-base">{item.code}</Text>
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <View className="p-8 items-center">
                  <Text className="text-[#7d848d] text-base">
                    No countries found
                  </Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
