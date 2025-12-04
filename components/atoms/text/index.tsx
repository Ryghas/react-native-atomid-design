import {useTheme} from '@react-navigation/native';

import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 24,
  },
  h5: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  h6: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
  xs: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    lineHeight: 16,
  },
  xs_sm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    lineHeight: 12,
  },
  s: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
  s_sm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
  m: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  m_sm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
  m_bold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 20,
  },
  l: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  l_sm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  l_bold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  xl: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    lineHeight: 28,
  },
  xl_sm: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    lineHeight: 28,
  },
  xl_bold: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    lineHeight: 28,
  },
});

export type TextProps = RNTextProps & {
  type?: keyof typeof styles;
  textAlign?: 'left' | 'center' | 'right';
};

export const Text = ({type = 'l', style, textAlign, ...props}: TextProps) => {
  const {colors} = useTheme();

  return (
    <RNText
      style={[styles[type], {color: colors.black, textAlign}, style]}
      {...props}
    />
  );
};
