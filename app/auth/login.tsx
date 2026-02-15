import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import LoginLogo from "@/assets/images/SplashIcon.svg";
import SvgIcon from "@/components/shared/svgIcon";
import { AuthText } from "./components/AuthText";
import { EmailInput } from "@/components/shared/EmailField";
import PasswordInput from "@/components/shared/PasswordField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 bg-[#0F0918] px-6 pt-14">
      <StatusBar barStyle="light-content" />

      <SvgIcon SvgComponent={LoginLogo} />

      <AuthText
        title="Let's start!"
        description="Sign in to manage your clients"
      />

      {/* Input Fields */}
      <View>
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

        {/* Forgot Password Row */}
        <View className="flex-row justify-between items-center py-2">
          <View className="flex-row items-center">
            <View className="w-5 h-5 border border-gray-600 rounded mr-2" />
            <Text className="text-gray-400 text-xs">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-red-700 text-xs font-bold">
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-[#C19A6B] py-4 rounded-xl items-center mt-6">
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View className="flex-row items-center my-10">
        <View className="flex-1 h-[0.5px] bg-gray-800" />
        <Text className="text-gray-500 mx-4 text-xs">or continue with</Text>
        <View className="flex-1 h-[0.5px] bg-gray-800" />
      </View>

      {/* Footer & Google */}
      <View className="items-center">
        <Text className="text-gray-400 mb-6">
          Don't have an account?{" "}
          <Text className="text-white font-bold">Register</Text>
        </Text>

        <TouchableOpacity className="flex-row items-center justify-center bg-[#2A2319] w-full py-4 rounded-xl border border-gray-800">
          <Text className="text-white font-semibold">Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
