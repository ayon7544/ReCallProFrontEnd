import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Feather } from "@expo/vector-icons";
interface TimelineVisitProps {
  date: string;
  title: string;
  formula: string;
  images: ImageSourcePropType[];
}

const TimelineVisitCard: React.FC<TimelineVisitProps> = ({
  date,
  title,
  formula,
  images,
}) => {
  return (
    <View className="flex-row w-full px-2">
      <View className="items-center mr-4 w-4">
        <View className="w-3 h-3 rounded-full z-10 mt-2 bg-[#C9A367] shadow-sm shadow-[#C9A367]" />
        <View className="w-[1px] flex-1 bg-gray-800 my-1" />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="flex-1 mb-4 p-4 rounded-2xl border border-[#C9A367] bg-[#101012]"
      >
        <View className="flex-row justify-between items-center mb-1 ">
          <Text className="text-xs font-medium text-[#C9A367]">{date}</Text>
          <Feather name="arrow-right" size={16} color="#fff" />
        </View>

        <Text className="text-white text-lg font-semibold mb-1">{title}</Text>

        <Text
          className="text-gray-400 text-sm mb-3 leading-5"
          numberOfLines={2}
        >
          {formula}
        </Text>

        {images.length > 0 && (
          <View className="flex-row">
            {images.map((img, index) => (
              <Image
                key={index}
                source={img}
                className="w-12 h-12 rounded-lg bg-gray-900 mr-2 border border-gray-700"
                resizeMode="cover"
              />
            ))}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TimelineVisitCard;
