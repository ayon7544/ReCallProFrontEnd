import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";
import AddNewVisitHeader from "@/components/shared/AddNewVisitHeader";
import AddNewVisitForm from "@/components/client/AddNewVisitForm";
const addNewVisit = () => {
  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <AddNewVisitHeader />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex- pt-8 pb-6 justify-center">
            <AddNewVisitForm></AddNewVisitForm>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default addNewVisit;
