import React, { useRef, useEffect } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "@/components/shared/Button";
import { GeneralText } from "@/components/shared/GeneralText";
import OTPInput, { OTPInputHandle } from "@/components/shared/OtpInput";
import ResendCode from "@/components/shared/ResentCode";
import useOtp from "../../services/hooks/auth/useOtp";
import ShowToast from "@/components/shared/ShowToast";
import { useLocalSearchParams, useRouter } from "expo-router";

const PasswordOtpVerification = () => {
  const otpRef = useRef<OTPInputHandle>(null);
  const params = useLocalSearchParams();
  const router = useRouter();

  const {
    email,
    setEmail,
    otp,
    setOtp,
    loading,
    error,
    successMessage,
    sendOtp,
    verifyOtp,
  } = useOtp();

  // Set email from route params when component mounts
  useEffect(() => {
    if (params.email && typeof params.email === "string") {
      setEmail(params.email);
    }
  }, [params.email]);

  // Navigate on success
  useEffect(() => {
    if (successMessage) {
      router.push("/auth/changePassword"); // replace with your actual route
    }
  }, [successMessage]);

  const handleSendOtp = async () => {
    await sendOtp();
    otpRef.current?.reset();
  };

  const handleVerifyOtp = async () => {
    await verifyOtp(otp); // send the entered OTP
  };

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
              title="OTP Verification"
              description={`Enter the 6-digit code that you received on ${
                email || "your email"
              }`}
            />
            <ShowToast
              message={error || successMessage}
              type={error ? "error" : successMessage ? "success" : "info"}
            />
            <View className="items-center py-2">
              <OTPInput
                ref={otpRef}
                length={6}
                onComplete={setOtp}
                onChange={(d) => setOtp(d.join(""))}
              />
            </View>

            <View className="items-center">
              <ResendCode
                isVisible={true}
                timerSeconds={30}
                onResend={handleSendOtp}
              />
            </View>

            <Button
              label="Verify OTP"
              onPress={handleVerifyOtp}
              disabled={otp.length !== 6 || loading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PasswordOtpVerification;
