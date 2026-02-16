import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import LoginLogo from "@/assets/images/SplashIcon.svg";
import SvgIcon from "@/components/shared/svgIcon";
import { AuthText } from "./components/AuthText";
import { EmailInput } from "@/components/shared/EmailField";
import { TextField } from "@/components/shared/TextField";
import { MobileNumberInput } from "@/components/shared/PhoneNumberField";
import PasswordInput from "@/components/shared/PasswordField";
import { Button } from "@/components/shared/Button";
import GoogleButton from "./components/AuthText";
import googleSvg from "@/assets/images/auth/google-button.svg";
import { Check } from "lucide-react-native";
import ShowToast from "@/components/shared/ShowToast";
import { useRouter } from "expo-router";
import useRegister from "./services/hooks/useRegister";

const register = () => {
  const {
    fullName,
    setFullName,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
    agreedToTerms,
    setAgreedToTerms,
    loading,
    error,
    successMessage,
    register,
  } = useRegister();
  const router = useRouter();

  const handleRegister = async () => {
    const success = await register();

    if (success) {
      // Navigate to verification screen with email parameter after a brief delay
      setTimeout(() => {
        router.push({
          pathname: "/auth/otpVerification", // Change this to your actual screen path
          params: { email },
        });
      }, 500); // 1.5 second delay to show success message
    }
  };

  const handleLoginGoogle = () => {
    console.log("Google Sign In clicked");
  };

  return (
    <View className="flex-1 bg-[#0F0918]">
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
            <AuthText title="Create Account" description="" />
            <ShowToast
              message={error || successMessage}
              type={error ? "error" : successMessage ? "success" : "info"}
            />
            {/* Input Fields */}
            <View>
              <TextField
                label="Full Name"
                placeholder="Enter Your Name"
                value={fullName}
                onChangeText={setFullName}
              />
              <MobileNumberInput
                label="Mobile Number"
                placeholder="1234567890"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
              <EmailInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
              />

              <View className="flex-row justify-between items-center py-2 my-3">
                <TouchableOpacity
                  onPress={() => setAgreedToTerms(!agreedToTerms)}
                  className="flex-row items-center"
                >
                  <View
                    className={`w-5 h-5 border rounded mr-2 flex items-center justify-center ${
                      agreedToTerms ? "border-green-700" : "border-white"
                    }`}
                  >
                    {agreedToTerms && <Check size={14} color="#22c55e" />}
                  </View>
                  <Text
                    className={`text-xs ${agreedToTerms ? "text-white" : "text-gray-400"}`}
                  >
                    I Agree to Terms & Conditions
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                label={loading ? "Registering..." : "Register"}
                onPress={handleRegister}
                disabled={loading}
              />
            </View>

            {/* Divider */}
            <View className="flex-row items-center my-6">
              <View className="flex-1 h-[0.5px] bg-gray-800" />
              <Text className="text-gray-500 mx-4 text-xs">
                or continue with
              </Text>
              <View className="flex-1 h-[0.5px] bg-gray-800" />
            </View>

            {/* Footer & Google */}
            <View className="items-center">
              <GoogleButton
                label="Sign In with Google"
                onPress={handleLoginGoogle}
                SvgComponent={googleSvg}
              />
            </View>
            <View className="my-6 items-center">
              <Text className="text-gray-400 text-center">
                Have a account?{" "}
                <Text
                  className="text-white font-bold"
                  onPress={() => router.push("/auth/login")}
                >
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default register;
