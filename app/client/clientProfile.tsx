import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import {
  useGetClientProfileDetails,
  ClientProfileDetails,
} from "@/services/hooks/home/useGetClientProfileDetails";
import CustomHeader from "@/components/shared/CustomHeader";
import ClientProfileHeaderCard from "@/components/client/ClientProfileHeaderCard";
import ClientDataTabs from "@/components/client/ClientDataTabs";
type RootStackParamList = {
  clientProfile: { id: string };
};

type ClientProfileRouteProp = RouteProp<RootStackParamList, "clientProfile">;

const ClientProfile: React.FC = () => {
  const route = useRoute<ClientProfileRouteProp>();
  const { id } = route.params;

  const client = useGetClientProfileDetails(id) as
    | ClientProfileDetails
    | undefined;

  if (!client) {
    return (
      <View className="flex-1 bg-[#0F0B18] justify-center items-center">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  const handleAddNewVisit = () => {
    // Navigate to Add Visit screen or open modal
    console.log("Add New Visit pressed");
  };

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        <View className="flex-row justify-between items-center pt-8 px-4">
          <CustomHeader />
        </View>

        <ClientProfileHeaderCard
          name={client.name}
          clientSince={client.clientSince}
          visitCount={client.visits}
          note={client.preferences}
          imageSource={{ uri: client.image }}
          containerClassName="px-4"
        />

        {/* Add New Visit Button */}
        <View className="px-4 mt-4">
          <TouchableOpacity
            onPress={handleAddNewVisit}
            className="border border-[#C9A367] rounded-full py-3 items-center justify-center"
          >
            <Text className="text-[#C9A367] text-base font-medium">
              + Add New Visit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 mt-4">
          <ClientDataTabs client={client} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ClientProfile;
