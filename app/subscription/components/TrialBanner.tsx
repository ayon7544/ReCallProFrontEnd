import React from "react";
import { View, Text, Pressable } from "react-native";
import { CalendarDays } from "lucide-react-native";
import { useRouter } from "expo-router";

interface TrialBannerProps {
  to?: string; // path to navigate
}

const TrialBanner: React.FC<TrialBannerProps> = ({ to }) => {
  const router = useRouter();

  const handlePress = () => {
    if (to) {
      router.push(to);
    }
  };

  return (
    <View className="w-full mt-6">
      <Pressable
        onPress={handlePress}
        className="flex-row items-center bg-[#1C1613] border-[1px] border-[#C9A367] rounded-[22px] px-4 py-2 active:opacity-70"
      >
        {/* Circular Icon Container */}
        <View className="w-[48px] h-[48px] rounded-full bg-[#C9A367] items-center justify-center mr-4 border">
          <CalendarDays size={24} color="#1A1512" strokeWidth={2.5} />
        </View>

        {/* Text Content */}
        <View className="flex-1">
          <Text className="text-white text-[17px] font-bold tracking-tight">
            Start your 30-Day Free Trial
          </Text>
          <Text className="text-[#9C948E] text-[13px] mt-0.5 leading-4">
            You won't be charged until your trial ends.
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TrialBanner;
