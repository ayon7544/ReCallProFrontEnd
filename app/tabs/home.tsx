import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
  Image,
} from "react-native";
import { useNavigation, useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { useCallback } from "react";
import SvgIcon from "@/components/shared/svgIcon";
import AppLogo from "@/assets/images/SplashIcon.svg";
import ImageNavigator from "@/components/shared/ImageNavigator";
import { useGetProfileData } from "@/services/hooks/home/useGetProfileData";
import useGetSearchedClients from "@/services/hooks/home/useGetSearchedClients";
import SearchBox from "@/components/shared/SearchBox";
import ShowToast from "@/components/shared/ShowToast";
import StatCard from "@/components/shared/StatCard";
const home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const route = useRouter();
  const { profileImage, totalClients, recentVisits } = useGetProfileData();
  const ProfileImage = Image.resolveAssetSource(profileImage);
  const { clients, loading, error, successMessage, searchClients } =
    useGetSearchedClients();
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        gestureEnabled: false,
        headerBackVisible: false,
      });
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        () => true,
      );
      return () => subscription.remove();
    }, [navigation]),
  );

  const handleImagePress = () => {
    route.push("/tabs/settings");
  };
  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return; // don't search if empty
    searchClients(searchQuery);
  };
  return (
    <View className="flex-1 bg-[#0F0B18]">
      <ShowToast
        message={error || successMessage}
        type={error ? "error" : successMessage ? "success" : "info"}
      />
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 justify-start px-6">
            <View className="flex-row justify-between items-center">
              <SvgIcon SvgComponent={AppLogo} />
              <ImageNavigator
                imageSource={ProfileImage.uri}
                onPress={handleImagePress}
              />
            </View>
            <View>
              <SearchBox
                placeholder="Search clients..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitSearch={handleSearchSubmit} // Pass submit handler
              />
            </View>
            <View className="flex-row justify-between items-center mt-4">
              <StatCard label="Total Clients" value={totalClients} />
              <StatCard label="Recent Visits" value={recentVisits} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default home;
