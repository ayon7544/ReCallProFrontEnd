import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface SocialButtonProps {
  SvgComponent?: React.FC<SvgProps>;
  imageSrc?: any;
  label: string;
  onPress: () => void;
}

export const GoogleButton: React.FC<SocialButtonProps> = ({
  SvgComponent,
  imageSrc,
  label,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-center w-full bg-[#463823] py-4 rounded-xl border border-[#4F4F59]"
  >
    <View className="flex items-center justify-center mr-3">
      {SvgComponent ? (
        <SvgComponent width={24} height={24} />
      ) : (
        <Image
          source={imageSrc}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      )}
    </View>
    <Text className="text-white text-base font-bold">{label}</Text>
  </TouchableOpacity>
);

export default GoogleButton;
