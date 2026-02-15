import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { Button } from "@/components/shared/Button";
import { GeneralText } from "@/components/shared/GeneralText";
import OTPInput, { OTPInputHandle } from "@/components/shared/OtpInput";
import ResendCode from "@/components/shared/ResentCode";
import useOtp from "./services/hooks/useOtp";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { ScrollView } from "react-native";
const OtpVerification = () => {
  const otpRef = useRef<OTPInputHandle>(null);
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

  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(true);

  // Countdown for resend button
  useEffect(() => {
    if (!canResend) {
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [canResend]);

  const handleSendOtp = async () => {
    await sendOtp();
    otpRef.current?.reset();
    setCanResend(false);
    setResendTimer(30);
  };

  const handleVerifyOtp = async () => {
    await verifyOtp("123456"); // replace with backend OTP
  };

  return (
    <View className="flex-1 bg-[#0F0B18]">
      <StatusBar barStyle="light-content" />
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
              description="Enter the 6-digit code that you received on your email"
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
                isVisible={!canResend}
                timerSeconds={resendTimer}
                onResend={handleSendOtp}
              />
            </View>
            {error && <Text className="text-red-500 mt-2">{error}</Text>}
            {successMessage && (
              <Text className="text-green-500 mt-2">{successMessage}</Text>
            )}

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

export default OtpVerification;
