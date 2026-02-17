import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

interface ResendCodeProps {
  isVisible: boolean;
  timerSeconds: number;
  onResend?: () => Promise<void> | void; // Support for async loading state
}

const ResendCode: React.FC<ResendCodeProps> = ({
  isVisible,
  timerSeconds: initialSeconds,
  onResend,
}) => {
  const [remaining, setRemaining] = useState<number>(initialSeconds);
  const [loading, setLoading] = useState<boolean>(false);

  const canResend = remaining <= 0;

  // Reset timer logic
  useEffect(() => {
    if (isVisible) {
      setRemaining(initialSeconds);
    }
  }, [isVisible, initialSeconds]);

  // Countdown logic
  useEffect(() => {
    if (!isVisible || remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible, remaining]);

  const handleResend = async () => {
    setLoading(true);
    if (onResend) {
      await onResend();
    }
    setRemaining(initialSeconds);
    setLoading(false);
  };

  const mm = Math.floor(remaining / 60);
  const ss = (remaining % 60).toString().padStart(2, "0");

  return (
    <View className="flex-row items-center justify-center mt-6 mb-4 px-4">
      <Text className="text-sm text-white/60 mr-1.5">Didn't get the code?</Text>

      {canResend ? (
        <TouchableOpacity
          onPress={handleResend}
          disabled={loading}
          activeOpacity={0.7}
          className="flex-row items-center border-b border-white/80 pb-0.5"
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" className="mr-2" />
          ) : (
            <Text className="text-sm font-bold text-white tracking-wide">
              Resend Now
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <View className="flex-row items-center bg-white/10 px-3 py-1.5 rounded-full">
          <Text className="text-xs font-medium text-white/40 uppercase tracking-tighter mr-2">
            Resend in
          </Text>
          <Text className="text-sm font-mono font-bold text-white w-[40px]">
            {mm}:{ss}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ResendCode;
