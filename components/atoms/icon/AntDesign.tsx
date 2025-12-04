import {AntDesign as AntDesignIcons} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';

interface AntDesignProps {
  name: keyof typeof AntDesignIcons.glyphMap;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const AntDesign = (props: AntDesignProps) => {
  const {colors} = useTheme();

  return <AntDesignIcons size={24} color={colors.black} {...props} />;
};
