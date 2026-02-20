import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DollarSign, Calendar, TrendingUp } from "lucide-react-native";

// Colors extracted from design
const COLORS = {
  CARD_BG: "#101012",
  CARD_BORDER: "#4F4F59", // Slightly darker/subtle border
  LABEL_COLOR: "#525263", // Muted grey-blue
  VALUE_COLOR: "#FFFFFF",
  SUB_COLOR: "#525263",
  SERVICE_DOT: "#A38235",
  TIPS_DOT: "#D4A545",
  GREEN: "#24A148",
  ICON_GOLD: "#B8974A",
};

type Props = {
  todayTotal: number;
  todayService: number;
  todayTips: number;
  weekTotal: number;
  weekGrowthPercent: number;
  tipsTotal: number;
  tipsRevenuePercent: number;
};

const AnalyticsBoxes = ({
  todayTotal,
  todayService,
  todayTips,
  weekTotal,
  weekGrowthPercent,
  tipsTotal,
  tipsRevenuePercent,
}: Props) => {
  return (
    <View style={styles.container}>
      {/* ── Today's Earnings ── */}
      <View style={styles.mainCard}>
        <View style={styles.labelRow}>
          <View style={styles.iconCircle}>
            <DollarSign size={10} color={COLORS.LABEL_COLOR} strokeWidth={3} />
          </View>
          <Text style={styles.labelText}>Today's Earnings</Text>
        </View>

        <Text style={styles.mainValue}>${todayTotal.toFixed(2)}</Text>

        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View
              style={[styles.dot, { backgroundColor: COLORS.SERVICE_DOT }]}
            />
            <Text style={styles.subText}>Service: ${todayService}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: COLORS.TIPS_DOT }]} />
            <Text style={styles.subText}>Tips: ${todayTips}</Text>
          </View>
        </View>
      </View>

      {/* ── Bottom Row ── */}
      <View style={styles.bottomRow}>
        {/* This Week */}
        <View style={styles.smallCard}>
          <View style={styles.labelRow}>
            <Calendar size={14} color={COLORS.LABEL_COLOR} />
            <Text style={styles.labelText}>This Week</Text>
          </View>
          <Text style={styles.smallValue}>${weekTotal.toLocaleString()}</Text>
          <View style={styles.growthRow}>
            <TrendingUp size={12} color={COLORS.GREEN} />
            <Text style={styles.growthText}>+{weekGrowthPercent}%</Text>
          </View>
        </View>

        {/* Tips */}
        <View style={styles.smallCard}>
          <View style={styles.labelRow}>
            <TrendingUp size={14} color={COLORS.ICON_GOLD} />
            <Text style={styles.labelText}>Tips</Text>
          </View>
          <Text style={styles.smallValue}>${tipsTotal.toLocaleString()}</Text>
          <Text style={styles.subText}>~{tipsRevenuePercent}% of revenue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    gap: 10,
 
  },
  mainCard: {
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.CARD_BORDER,
    padding: 20,
  },
  bottomRow: {
    flexDirection: "row",
    gap: 10,
  },
  smallCard: {
    flex: 1,
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.CARD_BORDER,
    padding: 16,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  iconCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: COLORS.LABEL_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    color: COLORS.LABEL_COLOR,
    fontSize: 13,
    fontWeight: "500",
  },
  mainValue: {
    color: COLORS.VALUE_COLOR,
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 12,
  },
  smallValue: {
    color: COLORS.VALUE_COLOR,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  legendRow: {
    flexDirection: "row",
    gap: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  subText: {
    color: COLORS.SUB_COLOR,
    fontSize: 13,
  },
  growthRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  growthText: {
    color: COLORS.GREEN,
    fontSize: 13,
    fontWeight: "600",
  },
});

export default AnalyticsBoxes;
