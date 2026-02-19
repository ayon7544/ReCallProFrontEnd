import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import EditProfileHeader from "@/components/shared/EditProfileHeader";
import { useGetClientInfo } from "@/services/hooks/home/useGetClientInfo";
import { useEffect } from "react";
import EditProfileForm from "@/components/shared/EditProfileForm";
import DeleteModal from "@/components/shared/DeleteModal";
import { Trash2 } from "lucide-react-native";

const editProfile = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const clientInfo = useGetClientInfo(id);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  useEffect(() => {
    if (clientInfo) {
      console.log("Client Info:", clientInfo);
    }
  }, [clientInfo]);

  const handleDeleteConfirm = () => {
    setIsDeleteModalVisible(false);
    // Handle delete logic here (e.g., call API, navigate back)
    console.log("Client deleted:", id);
  };

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <EditProfileHeader />

        {/* Scrollable content */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {clientInfo && (
            <EditProfileForm
              name={clientInfo.fullName}
              profileImage={clientInfo.image}
              phone={clientInfo.phoneNumber}
              email={clientInfo.email}
              notes={clientInfo.notes}
            />
          )}
        </ScrollView>

        {/* Delete Client Button — pinned to bottom */}
        <View className=" mb-4 mx-4 my-10">
          <TouchableOpacity
            onPress={() => setIsDeleteModalVisible(true)}
            activeOpacity={0.7}
            className="w-full py-4 flex-row items-center justify-center gap-x-2"
            style={{
              borderWidth: 2,
              borderColor: "#82181A80",
              padding: 20, // Adjusted padding for a better look
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12, // <-- Added for rounded corners
            }}
          >
            <Trash2 size={18} color="#ef4444" />
            <Text className="text-white font-semibold text-base text-center">
              Delete Client
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleDeleteConfirm}
        title="Delete Client?"
        description={`Are you sure you want to delete ${clientInfo?.fullName ?? "this client"}? This action cannot be undone.`}
        cancelText="Cancel"
        confirmText="Delete"
      />
    </View>
  );
};

export default editProfile;
