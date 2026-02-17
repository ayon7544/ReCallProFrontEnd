import React from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from "react-native";
import { useNavigation } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
const home = () => {
    const navigation = useNavigation();
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
  
  return (
    <View className="flex-1 bg-[#0F0B18]">
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
          <View className="flex-1 px-6 pt-8 pb-6 justify-center"></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default home;
