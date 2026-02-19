import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

interface Props {
  id: string;
}

const ServiceDetails: React.FC<Props> = ({ id }) => {
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Images/Media */}
        <View className="flex-row justify-between mb-6">
          <View className="w-[48%] h-36 rounded-xl overflow-hidden border border-[#2D2C35]">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000",
              }}
              className="w-full h-full opacity-80"
              resizeMode="cover"
            />
          </View>
          <View className="w-[48%] h-36 rounded-xl overflow-hidden border border-[#2D2C35] relative">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1621605815841-aa88c82b028c?q=80&w=1000",
              }}
              className="w-full h-full opacity-60"
              resizeMode="cover"
            />
            <View className="absolute inset-0 justify-center items-center bg-black/20">
              <Ionicons name="play" size={32} color="white" />
              <View className="absolute bottom-2 right-2 bg-black/60 px-1.5 py-0.5 rounded">
                <Text className="text-white text-[10px]">0:04</Text>
              </View>
            </View>
          </View>
        </View>

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
          {/* FIXED: Changed <div> to <View> */}
          <View className="flex-row">
            <View className="bg-[#3D3528] px-5 py-2 rounded-full mr-3 border border-[#5C4E38]">
              <Text className="text-[#C5A059] text-sm font-semibold">
                Haircut
              </Text>
            </View>
            <View className="bg-[#3D3528] px-5 py-2 rounded-full border border-[#5C4E38]">
              <Text className="text-[#C5A059] text-sm font-semibold">
                Beard Trim
              </Text>
            </View>
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
              Formulas used, guard sizes, techniques...
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
              Mentioned her daughter is starting college.
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
            <Text className="text-gray-400 text-[15px]">1.30</Text>
          </View>
        </View>

        {/* Pricing Row */}
        <View className="flex-row justify-between">
          <View className="w-[47%]">
            <Text className="text-gray-500 text-base mb-2">Service Price</Text>
            <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
              <Text className="text-gray-400 text-[15px]">$200</Text>
            </View>
          </View>
          <View className="w-[47%]">
            <Text className="text-gray-500 text-base mb-2">Tip</Text>
            <View className="bg-[#101012] p-4 rounded-xl border border-[#4F4F59] min-h-[55px] justify-center">
              <Text className="text-gray-400 text-[15px]">$50</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Static Footer */}
      <View className="absolute bottom-0 left-0 right-0 flex-row justify-between items-center px-6 py-8 bg-[#0F0E17] border-t border-[#4F4F59]">
        <Text className="text-gray-600 text-xl">Total</Text>
        <Text className="text-white text-2xl font-bold">$250</Text>
      </View>
    </>
  );
};

export default ServiceDetails;
