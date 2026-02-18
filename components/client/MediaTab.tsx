import { View, Image } from "react-native";
interface MediaTabProps {
  media: any[];
}

const MediaTab: React.FC<MediaTabProps> = ({ media }) => {
  return (
    <View className="flex-row flex-wrap justify-between">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <View
          key={item}
          className="w-[31%] aspect-square mb-2 bg-gray-900 rounded-lg overflow-hidden"
        >
          <Image
            source={{ uri: `https://picsum.photos/200?random=${item}` }}
            className="w-full h-full"
          />
        </View>
      ))}
    </View>
  );
};

export default MediaTab;
