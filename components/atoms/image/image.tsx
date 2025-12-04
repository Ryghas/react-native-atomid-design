import {useTheme} from '@react-navigation/native';
import {Image as ExpoImage, ImageProps, ImageStyle} from 'expo-image';
import React from 'react';

export const Image = ({style, ...props}: ImageProps) => {
  const {colors} = useTheme();

  return (
    <ExpoImage
      style={[{backgroundColor: colors.borderDisabled}, style as ImageStyle]}
      {...props}
    />
  );
};
