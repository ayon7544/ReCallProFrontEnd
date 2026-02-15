import React from "react";
import { View } from "react-native";

interface PaginationDotsProps {
  total: number;
  activeIndex: number;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  total,
  activeIndex,
}) => {
  return (
    <View className="flex-row justify-center space-x-2">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <View
            key={index}
            className={`h-2 rounded-full ${
              isActive ? "w-6 bg-[#C0A068]" : "w-2 mx-2 bg-[#2A2633]"
            }`}
          />
        );
      })}
    </View>
  );
};
