import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from "react-native";
import {  useRouter } from "expo-router";
import SvgIcon from "@/components/shared/svgIcon";
import AppLogo from "@/assets/images/SplashIcon.svg";
import useGetSearchedClients from "@/services/hooks/home/useGetSearchedClients";
import SearchBox from "@/components/shared/SearchBox";
import ShowToast from "@/components/shared/ShowToast";

import UserCard from "@/components/shared/userCard";
import { useGetRecentlyViewed } from "@/services/hooks/home/useGetRecentlyViewed";

const clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const route = useRouter();
  const { recentlyViewed } = useGetRecentlyViewed();
  const { error, successMessage, searchClients } =
    useGetSearchedClients();

  const handleSearchSubmit = () => {
    if (!searchQuery.trim()) return;
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
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* FIXED TOP SECTION (Non-scrollable) */}
        <View className="px-6 pt-4">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <SvgIcon SvgComponent={AppLogo} />
          </View>

          {/* Search */}
          <View className="mt-4">
            <SearchBox
              placeholder="Search clients..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitSearch={handleSearchSubmit}
            />
          </View>
        </View>

        {/* SCROLLABLE BOTTOM SECTION (Only the List) */}
        <FlatList
          
          data={recentlyViewed}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              name={item.name}
              lastService={item.lastService}
              imageUri={item.imageUri}
              onPress={() =>
                route.push({
                  pathname: "/client/clientProfile",
                  params: { id: item.id },
                })
              }
            />
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingBottom: 150,
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default clients;
