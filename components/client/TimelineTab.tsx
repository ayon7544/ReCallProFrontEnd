import { View } from "lucide-react-native";
import TimelineVisitCard from "./TimelineVisitCard";
interface TimelineTabProps {
  timeline: any[];
}

const TimelineTab: React.FC<TimelineTabProps> = ({ timeline }) => {
  return (
    <View style={{ paddingBottom: 40 }}>
      <TimelineVisitCard
        date="2026-02-09"
        title="Balayage & Cut"
        formula="Formula 7B + 6N"
        images={[{ uri: "https://picsum.photos/200" }]}
      />
      <TimelineVisitCard
        date="2026-02-09"
        title="Balayage & Cut"
        formula="Formula 7B + 6N"
        images={[{ uri: "https://picsum.photos/200" }]}
      />
      <TimelineVisitCard
        date="2026-02-09"
        title="Balayage & Cut"
        formula="Formula 7B + 6N"
        images={[{ uri: "https://picsum.photos/200" }]}
      />
      <TimelineVisitCard
        date="2026-02-09"
        title="Balayage & Cut"
        formula="Formula 7B + 6N"
        images={[{ uri: "https://picsum.photos/200" }]}
      />
      <TimelineVisitCard
        date="2026-02-09"
        title="Balayage & Cut"
        formula="Formula 7B + 6N"
        images={[{ uri: "https://picsum.photos/200" }]}
      />
    </View>
  );
};

export default TimelineTab;
