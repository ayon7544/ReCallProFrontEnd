import React, { useEffect } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@/components/shared/Button";
import { GeneralText } from "@/components/shared/GeneralText";
import ShowToast from "@/components/shared/ShowToast";
import PasswordInput from "@/components/shared/PasswordField";
import useChangePassword from "./services/hooks/useChangePassword";
import { useRouter } from "expo-router";

const ChangePassword = () => {
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    successMessage,
    handleChangePassword,
  } = useChangePassword();

  const router = useRouter();

  useEffect(() => {
    if (successMessage) {
      router.replace("/auth/login");
    }
  }, [successMessage]);

  const isButtonDisabled = !newPassword || !confirmPassword || loading;

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
          <View className="flex-1 px-6 pt-8 pb-6 justify-center">
            <GeneralText
              title="Reset your password"
              description="Create a new password for your account and make sure to choose a strong and unique password."
            />
            <ShowToast
              message={error || successMessage}
              type={error ? "error" : successMessage ? "success" : "info"}
            />
            <PasswordInput
              label="New Password"
              placeholder="**********"
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="**********"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <View className="py-3">
              <Button
                label={loading ? "Changing Password..." : "Change Password"}
                onPress={handleChangePassword}
                disabled={isButtonDisabled}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePassword;
