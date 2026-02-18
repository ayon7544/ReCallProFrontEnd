import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface CustomHeaderProps {
  onEditPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ onEditPress }) => {
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className="w-full flex-row items-center justify-between bg-transparent px-3 pb-3">
      <TouchableOpacity
        className="w-10 h-10 rounded-full bg-[#2a2a2a] items-center justify-center"
        onPress={handleBackPress}
        activeOpacity={0.7}
      >
        <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Spacer to keep layout balanced */}
      <View style={{ width: 40 }} />

      <TouchableOpacity
        className="w-10 h-10 rounded-full bg-[#2a2a2a] items-center justify-center"
        onPress={onEditPress}
        activeOpacity={0.7}
      >
        <Ionicons name="pencil-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
