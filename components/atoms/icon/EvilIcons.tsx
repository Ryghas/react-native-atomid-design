import {EvilIcons as EvilIconsIcons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';

interface EvilIconsProps {
  name: keyof typeof EvilIconsIcons.glyphMap;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const EvilIcons = (props: EvilIconsProps) => {
  const {colors} = useTheme();

  return <EvilIconsIcons size={24} color={colors.black} {...props} />;
};
