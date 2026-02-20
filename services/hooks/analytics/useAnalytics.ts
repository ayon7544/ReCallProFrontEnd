import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type DayData = {
  day: string;
  service: number;
  tips: number;
};

export type AnalyticsData = {
  todayTotal: number;
  todayService: number;
  todayTips: number;
  weekTotal: number;
  weekGrowthPercent: number;
  tipsTotal: number;
  tipsRevenuePercent: number;
  chartData: DayData[];
  years: string[];
  months: string[];
};

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const DUMMY_DATA: AnalyticsData = {
  todayTotal: 450.0,
  todayService: 370,
  todayTips: 80,
  weekTotal: 3650,
  weekGrowthPercent: 12,
  tipsTotal: 700,
  tipsRevenuePercent: 19,
  chartData: [
    { day: "Mon", service: 120, tips: 30 },
    { day: "Tue", service: 180, tips: 50 },
    { day: "Wed", service: 300, tips: 80 },
    { day: "Thu", service: 400, tips: 100 },
    { day: "Fri", service: 550, tips: 150 },
    { day: "Sat", service: 750, tips: 200 },
    { day: "Sun", service: 200, tips: 60 },
  ],
  years: ["2022", "2023", "2024", "2025", "2026"],
  months: [
    "Jan 01",
    "Feb 01",
    "Mar 01",
    "Apr 01",
    "May 01",
    "Jun 05",
    "Jul 01",
    "Aug 01",
    "Sep 01",
    "Oct 01",
    "Nov 01",
    "Dec 01",
  ],
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

type UseAnalyticsReturn = {
  data: AnalyticsData | null;
  initialLoading: boolean; // true only on very first load (no data yet)
  refreshing: boolean; // true when re-fetching but data already exists
  error: string | null;
  refetch: () => void;
};

export const useAnalytics = (
  year?: string,
  month?: string,
): UseAnalyticsReturn => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isFirstLoad = useRef(true);

  const fetchData = async () => {
    try {
      setError(null);

      if (isFirstLoad.current) {
        setInitialLoading(true);
      } else {
        // Has data already — show subtle refresh, keep old data visible
        setRefreshing(true);
      }

      // TODO: Replace with real API call:
      // const res = await fetch(`/api/analytics?year=${year}&month=${month}`);
      // const json = await res.json();
      // setData(json);

      await new Promise((resolve) => setTimeout(resolve, 800));
      setData(DUMMY_DATA);
    } catch (err) {
      setError("Failed to load analytics data.");
    } finally {
      setInitialLoading(false);
      setRefreshing(false);
      isFirstLoad.current = false;
    }
  };

  useEffect(() => {
    fetchData();
  }, [year, month]);

  return { data, initialLoading, refreshing, error, refetch: fetchData };
};
