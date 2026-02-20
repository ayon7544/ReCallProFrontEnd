import React from "react";
import { View, Text } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

const AnalyticsHeader = ({ title, subtitle }: Props) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 28,
          fontWeight: "700",
          letterSpacing: -0.5,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#6B6B8A",
          fontSize: 13,
          fontWeight: "400",
          marginTop: 2,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default AnalyticsHeader;
