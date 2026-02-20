import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface AddNewVisitHeaderProps {
  onEditPress?: () => void;
}

const AddNewVisitHeader: React.FC<AddNewVisitHeaderProps> = ({
  onEditPress,
}) => {
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className="w-full flex-row items-center justify-between bg-transparent px-3 pb-3 border-b border-gray-700">
      <TouchableOpacity
        className="w-10 h-10 rounded-full bg-[#2a2a2a] items-center justify-center"
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
      </TouchableOpacity>

      <Text className="text-white text-xl font-semibold">New Visit</Text>

      <TouchableOpacity
        className="rounded-full items-center justify-center"
        onPress={onEditPress}
        activeOpacity={0.7}
      >
        <Text className="text-[#C9A367] text-lg">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewVisitHeader;
