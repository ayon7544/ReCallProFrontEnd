import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SUBSCRIPTION_PLANS } from "@/constants/subscriptions";

export const PlanSelector = () => {
  // Internal state to keep Subscriptions.tsx clean
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );
  const currentPlans = SUBSCRIPTION_PLANS[billingCycle];
  const [selectedPlan, setSelectedPlan] = useState(currentPlans[0]);

  const handleCycleChange = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
    // Sync the selection (Basic vs Premium) when switching Monthly/Yearly
    const isBasic = selectedPlan.name === "Basic";
    setSelectedPlan(SUBSCRIPTION_PLANS[cycle][isBasic ? 0 : 1]);
  };

  return (
    <View className="w-full mt-6">
      {/* 1. Monthly / Yearly Toggle */}
      <View className="flex-row bg-[#15121E] rounded-2xl p-1.5 mb-6 border border-[#2D2838]">
        <TouchableOpacity
          className={`flex-1 py-3.5 items-center rounded-xl ${billingCycle === "monthly" ? "bg-[#3D3528]" : ""}`}
          onPress={() => handleCycleChange("monthly")}
        >
          <Text
            className={`font-bold ${billingCycle === "monthly" ? "text-white" : "text-gray-500"}`}
          >
            Monthly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-3.5 items-center rounded-xl ${billingCycle === "yearly" ? "bg-[#3D3528]" : ""}`}
          onPress={() => handleCycleChange("yearly")}
        >
          <View className="flex-row items-center">
            <Text
              className={`font-bold ${billingCycle === "yearly" ? "text-white" : "text-gray-500"}`}
            >
              Yearly
            </Text>
            <Text className="text-[#C9A367] text-[10px] font-black ml-1">
              SAVE 20%
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 2. Plan Cards Container */}
      <View className="flex-row bg-[#15121E] rounded-3xl p-2 border border-[#2D2838] justify-between">
        {currentPlans.map((plan) => {
          const isActive = selectedPlan.id === plan.id;
          return (
            <TouchableOpacity
              key={plan.id}
              className={`w-[48.5%] p-5 rounded-2xl ${isActive ? "bg-[#3D3528]" : "bg-transparent"}`}
              onPress={() => setSelectedPlan(plan)}
            >
              <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                {plan.name}
              </Text>
              <View className="flex-row items-baseline">
                <Text className="text-white text-2xl font-black">
                  {plan.price}
                </Text>
                <Text className="text-gray-400 text-[10px] ml-0.5">
                  {plan.period}
                </Text>
              </View>
              <Text className="text-gray-500 text-[10px] mt-2 font-medium">
                {plan.clients}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 3. Features List */}
      <View className="mt-8 px-1">
        {selectedPlan.features.map((feature, index) => (
          <View key={index} className="flex-row items-start mb-5">
            <View className="bg-[#2D2838] rounded-full p-1 mt-0.5">
              <Ionicons name="checkmark" size={12} color="#C9A367" />
            </View>
            <Text className="text-gray-200 text-sm ml-4 font-medium leading-5">
              {feature}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// CRITICAL: This is the default export that fixes your warning
export default PlanSelector;
