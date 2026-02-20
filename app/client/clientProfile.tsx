import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  useGetClientProfileDetails,
  ClientProfileDetails,
} from "@/services/hooks/home/useGetClientProfileDetails";
import CustomHeader from "@/components/shared/CustomHeader";
import ClientProfileHeaderCard from "@/components/client/ClientProfileHeaderCard";
import ClientDataTabs from "@/components/client/ClientDataTabs";

type RootStackParamList = {
  clientProfile: { id: string };
  editClient: { id: string };
  addVisit: { clientId: string };
};

type ClientProfileRouteProp = RouteProp<RootStackParamList, "clientProfile">;
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "clientProfile"
>;

const ClientProfile: React.FC = () => {
  const route = useRoute<ClientProfileRouteProp>();
  const { id } = route.params;
  const router = useRouter();
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
    router.push("/client/addNewVisit");
  };

  const handleEditClient = () => {
    router.push({
      pathname: "/client/editProfile",
      params: { id },
    });
  };

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="flex-row justify-between items-center pt-8 px-4">
          <CustomHeader onEditPress={handleEditClient} />
        </View>

        <ClientProfileHeaderCard
          name={client.name}
          clientSince={client.clientSince}
          visitCount={client.visits}
          note={client.preferences}
          imageSource={{ uri: client.image }}
          containerClassName="px-4"
        />

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
