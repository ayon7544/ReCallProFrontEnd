import React from "react";
import { View } from "react-native";
import TimelineVisitCard from "./TimelineVisitCard";

export interface TimelineItem {
  id: string;
  date: string;
  name: string;
  items: string[];
  media: string[]; // changed from images → media
}

interface TimelineTabProps {
  timeline: TimelineItem[];
}

const TimelineTab: React.FC<TimelineTabProps> = ({ timeline }) => {
  if (!timeline || timeline.length === 0) {
    return <View style={{ paddingBottom: 40 }} />;
  }

  return (
    <View style={{ paddingBottom: 40 }}>
      {timeline.map((visit) => (
        <TimelineVisitCard
          key={visit.id}
          id={visit.id}
          date={visit.date}
          title={visit.name}
          formula={visit.items?.join(" + ") ?? ""}
          media={visit.media?.map((uri) => ({ uri })) ?? []}
        />
      ))}
    </View>
  );
};

export default TimelineTab;
