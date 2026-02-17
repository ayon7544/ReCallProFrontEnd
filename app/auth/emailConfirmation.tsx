import React, { useState, useCallback } from "react";
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

import { EmailInput } from "@/components/shared/EmailField";
import { GeneralText } from "@/components/shared/GeneralText";
import { Button } from "@/components/shared/Button";

const EmailConfirmation = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const confirmEmail = useCallback(() => {
    if (!email.trim()) return; // Extra safety, though button is disabled
    router.push({
      pathname: "/auth/passwordOtpVerification",
      params: { email },
    });
  }, [email, router]);

  const isButtonDisabled = !email.trim(); // Disable if email is empty or just spaces

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-1 px-6 pt-8 pb-6 justify-center">
            <GeneralText
              title="Email Confirmation"
              description="Enter your email for verification"
            />

            <EmailInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />

            <Button
              label="Send Verification Code"
              onPress={confirmEmail}
              disabled={isButtonDisabled} // Button disabled when email empty
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EmailConfirmation;
