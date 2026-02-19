import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  useGetServiceDetails,
  ServiceDetails as ServiceDetailsType,
} from "@/services/hooks/home/useGetServiceDetails";

interface Props {
  id: string;
}

const ServiceDetails: React.FC<Props> = ({ id }) => {
  const service = useGetServiceDetails(id) as ServiceDetailsType;

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Images/Media */}
        {service.media.length > 0 && (
          <View className="flex-row justify-between mb-6">
            {service.media.slice(0, 2).map((uri, index) => (
              <View
                key={index}
                className={`${
                  service.media.length === 1 ? "w-full" : "w-[48%]"
                } h-36 rounded-xl overflow-hidden border border-[#2D2C35] relative`}
              >
                <Image
                  source={{ uri }}
                  className="w-full h-full opacity-80"
                  resizeMode="cover"
                />
                {/* If you want to distinguish video vs image, extend the media type here */}
              </View>
            ))}
          </View>
        )}

        {/* Service Type Section */}
        <View className="mb-6">
          <View className="flex-row items-center mb-3">
            <MaterialCommunityIcons
              name="tag-outline"
              size={20}
              color="#9CA3AF"
            />
            <Text className="text-gray-300 text-base font-medium ml-2">
              Service Type
            </Text>
          </View>
          <View className="flex-row flex-wrap gap-y-2">
            {service.serviceType.map((type, index) => (
              <View
                key={index}
                className="bg-[#3D3528] px-5 py-2 rounded-full mr-3 border border-[#5C4E38]"
              >
                <Text className="text-[#C5A059] text-sm font-semibold">
                  {type}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Service Notes */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialIcons name="assignment" size={18} color="#4B5563" />
            <Text className="text-gray-500 text-base ml-2">Service Notes</Text>
          </View>
          <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
            <Text className="text-white text-[15px]">
              {service.serviceNotes}
            </Text>
          </View>
        </View>

        {/* Personal Notes */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <Ionicons name="person-outline" size={18} color="#4B5563" />
            <Text className="text-gray-500 text-base ml-2">Personal Notes</Text>
          </View>
          <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
            <Text className="text-white text-[15px]">
              {service.personalNotes}
            </Text>
          </View>
        </View>

        {/* Duration */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <Ionicons name="time-outline" size={18} color="#4B5563" />
            <Text className="text-gray-500 text-base ml-2">Duration</Text>
          </View>
          <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
            <Text className="text-gray-400 text-[15px]">
              {service.duration}
            </Text>
          </View>
        </View>

        {/* Pricing Row */}
        <View className="flex-row justify-between">
          <View className="w-[47%]">
            <Text className="text-gray-500 text-base mb-2">Service Price</Text>
            <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
              <Text className="text-gray-400 text-[15px]">
                ${service.servicePrice}
              </Text>
            </View>
          </View>
          <View className="w-[47%]">
            <Text className="text-gray-500 text-base mb-2">Tip</Text>
            <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
              <Text className="text-gray-400 text-[15px]">${service.tip}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Static Footer */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center px-6 py-8 bg-[#0F0E17] border-t border-[#4F4F59]">
        <Text className="text-gray-600 text-xl">Total</Text>
        <Text className="text-white text-2xl font-bold">${service.total}</Text>
      </View>
    </>
  );
};

export default ServiceDetails;
