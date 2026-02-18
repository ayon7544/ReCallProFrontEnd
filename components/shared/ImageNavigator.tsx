import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import SvgIcon from "./svgIcon";

interface ImageNavigatorProps {
  imageSource: string | React.FC<SvgProps>; // ✅ match SvgIcon's expected type
  onPress: () => void;
}

const ImageNavigator: React.FC<ImageNavigatorProps> = ({
  imageSource,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        {typeof imageSource === "string" ? (
          <Image source={{ uri: imageSource }} style={styles.image} />
        ) : (
          <SvgIcon SvgComponent={imageSource} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50, 
  },
});

export default ImageNavigator;
