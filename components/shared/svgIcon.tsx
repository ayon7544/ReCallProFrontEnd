import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

// Define a prop interface to handle both SVGs and PNGs
interface SvgIconProps {
  SvgComponent?: React.FC<SvgProps>; // The SVG component (optional)
  imageSource?: ImageSourcePropType; // The PNG image source (optional)
  width?: number; // Optional width for resizing
  height?: number; // Optional height for resizing
}

const SvgIcon: React.FC<SvgIconProps> = ({
  SvgComponent,
  imageSource,
  width = 100,
  height = 100,
}) => {
  if (SvgComponent) {
    return <SvgComponent width={width} height={height} />;
  }

  if (imageSource) {
    return <Image source={imageSource} style={{ width, height }} />;
  }

  return null; // Return nothing if no image or SVG component is provided
};

export default SvgIcon;
