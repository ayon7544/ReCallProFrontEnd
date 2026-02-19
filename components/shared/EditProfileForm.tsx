import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import { User, Phone, Mail } from "lucide-react-native";

interface EditProfileFormProps {
  name?: string;
  profileImage: string;
  phone?: string;
  email?: string;
  notes?: string;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  name,
  profileImage,
  phone,
  email,
  notes,
}) => {
  return (
    <View className="w-full bg-[#0d0d12] px-6 pt-10">
      {/* Profile Image */}
      <View className="items-center mb-8">
        <View className="w-24 h-24 rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-900">
          <Image
            source={{ uri: profileImage }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Form Fields */}
      <View className="gap-y-5">
        <InputGroup
          label="Full Name"
          icon={<User size={20} color="#52525b" />}
          placeholder="Isabella Rossi"
          value={name}
        />
        <InputGroup
          label="Phone Number"
          icon={<Phone size={20} color="#52525b" />}
          placeholder="+1 (555) 123-4567"
          value={phone}
        />
        <InputGroup
          label="Email Address"
          icon={<Mail size={20} color="#52525b" />}
          placeholder="isabella.r@example.com"
          value={email}
        />

        {/* Notes Section */}
        <View className="gap-y-2">
          <Text className="text-zinc-400 text-sm font-medium ml-1">Notes</Text>
          <TextInput
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="w-full bg-[#101012] border border-[#4F4F59] rounded-2xl p-4 text-zinc-300 min-h-[120px]"
            placeholder="Prefers warm tones. Sensitive scalp."
            placeholderTextColor="#3f3f46"
            defaultValue={notes}
          />
        </View>
      </View>
    </View>
  );
};

// Internal Input Helper
const InputGroup = ({ label, icon, placeholder, value }: any) => (
  <View className="gap-y-2">
    <Text className="text-zinc-400 text-sm font-medium ml-1">{label}</Text>
    <View className="relative flex-row items-center">
      <View className="absolute left-4 z-10">{icon}</View>
      <TextInput
        className="w-full bg-[#101012] border border-[#4F4F59] rounded-2xl py-4 pl-12 pr-4 text-zinc-300 font-medium"
        placeholder={placeholder}
        placeholderTextColor="#3f3f46"
        defaultValue={value}
      />
    </View>
  </View>
);

export default EditProfileForm;
