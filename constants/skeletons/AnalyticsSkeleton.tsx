

import React from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import Skeleton from "./Skeleton";

/* ── tiny layout helpers ─────────────────────────────────────────────────── */
const Row = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => (
  <View style={[{ flexDirection: "row", alignItems: "center" }, style]}>
    {children}
  </View>
);

const Spacer = ({ h = 0, w = 0 }: { h?: number; w?: number }) => (
  <View style={{ height: h, width: w }} />
);

/* ── Stats box skeleton (mirrors one AnalyticsBox card) ──────────────────── */
const StatBoxSkeleton = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#1A1628",
      borderRadius: 16,
      padding: 16,
      minHeight: 96,
    }}
  >
    <Skeleton width={60} height={10} borderRadius={5} />
    <Spacer h={10} />
    <Skeleton width={80} height={22} borderRadius={6} />
    <Spacer h={8} />
    <Skeleton width={50} height={10} borderRadius={5} />
  </View>
);

/* ── Main export ─────────────────────────────────────────────────────────── */
const AnalyticsSkeleton = () => (
  <ScrollView
    contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
    showsVerticalScrollIndicator={false}
    scrollEnabled={false} // disable scroll while loading
  >
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 52,
        paddingBottom: 32,
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <Skeleton width={120} height={26} borderRadius={8} />
      <Spacer h={8} />
      <Skeleton width={160} height={14} borderRadius={6} />

      <Spacer h={28} />

      {/* ── Stats row 1: Today ─────────────────────────────────────────── */}
      <Row style={{ gap: 12 }}>
        <StatBoxSkeleton />
        <StatBoxSkeleton />
        <StatBoxSkeleton />
      </Row>

      <Spacer h={12} />

      {/* ── Stats row 2: Week / Tips ───────────────────────────────────── */}
      <Row style={{ gap: 12 }}>
        <StatBoxSkeleton />
        <StatBoxSkeleton />
      </Row>

      <Spacer h={28} />

      {/* ── Chart card ────────────────────────────────────────────────── */}
      <View
        style={{
          backgroundColor: "#1A1628",
          borderRadius: 20,
          padding: 20,
        }}
      >
        {/* Chart title + year picker */}
        <Row style={{ justifyContent: "space-between" }}>
          <Skeleton width={100} height={16} borderRadius={6} />
          <Skeleton width={70} height={30} borderRadius={8} />
        </Row>

        <Spacer h={16} />

        {/* Month chips */}
        <Row style={{ gap: 8 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} width={52} height={28} borderRadius={14} />
          ))}
        </Row>

        <Spacer h={20} />

        {/* Chart bars */}
        <Row
          style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: 140,
          }}
        >
          {[70, 45, 90, 60, 110, 80, 55, 95, 40, 75, 100, 65].map((h, i) => (
            <Skeleton
              key={i}
              width={18}
              height={h}
              borderRadius={6}
              style={{ alignSelf: "flex-end" }}
            />
          ))}
        </Row>

        <Spacer h={12} />

        {/* X-axis labels */}
        <Row style={{ justifyContent: "space-between" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} width={28} height={10} borderRadius={4} />
          ))}
        </Row>
      </View>
    </View>
  </ScrollView>
);

export default AnalyticsSkeleton;
