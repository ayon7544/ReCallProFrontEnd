import React from "react";
import { View, ScrollView, KeyboardAvoidingView, Text } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/shared/Button";
import ShowToast from "@/components/shared/ShowToast";
import useCreateNewClient from "@/services/hooks/home/useCreateNewClient";
import CreateNewClientForm from "@/components/createClient/CreateNewClientForm";
const createClients = () => {
  const {
    formData,
    setField,
    submitClient,
    isSubmitting,
    toastMessage,
    toastType,
    clearToast,
  } = useCreateNewClient();

  return (
    <View className="flex-1 bg-[#0F0B18]">
      {/* Toast */}
      <ShowToast
        message={toastMessage}
        type={toastType}
        onHide={() => {
          clearToast();
          if (toastType === "success") router.back();
        }}
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        {/* Header */}
        <View className="justify-center items-center">
          <Text className="text-white text-xl font-semibold mb-2">
            Create New Client
          </Text>
          <View
            style={{ height: 1, width: "100%", backgroundColor: "#374151" }}
          />
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="pt-4 pb-6">
            <CreateNewClientForm formData={formData} setField={setField} />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 16,
              }}
            >
              <View style={{ width: "80%" }}>
                <Button
                  label={isSubmitting ? "Saving…" : "Create Client Profile"}
                  onPress={submitClient}
                  disabled={isSubmitting}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default createClients;
