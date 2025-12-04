import {useTheme} from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import HTMLView, {RenderHTMLProps} from 'react-native-render-html';

interface Props extends RenderHTMLProps {
  fontSize?: number;
  textColor?: string;
}

export const HtmlView: React.FC<Props> = ({
  fontSize,
  textColor,
  tagsStyles,
  ...props
}) => {
  const {width} = useWindowDimensions();
  const {colors} = useTheme();

  return (
    <HTMLView
      contentWidth={width}
      tagsStyles={{...baseStyleFonts, ...tagsStyles}}
      systemFonts={baseSystemFonts}
      baseStyle={{
        margin: 0,
        padding: 0,
        fontFamily: 'Montserrat-Regular',
        fontWeight: undefined,
        fontSize: fontSize || 14,
        lineHeight: (fontSize || 12) * 1.5,
        color: textColor || colors.blackRich,
      }}
      {...props}
    />
  );
};

const baseSystemFonts = [
  ...Constants.systemFonts,
  'Montserrat-Regular',
  'Montserrat-SemiBold',
  'Montserrat-Bold',
];

const baseStyleFonts = {
  b: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: undefined,
  },
  strong: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: undefined,
  },
  span: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: undefined,
  },
  h3: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: undefined,
    fontSize: 16,
    lineHeight: 16 * 1.5,
    margin: 0,
    marginBottom: 8,
    padding: 0,
  },
  ul: {
    marginTop: 0,
    marginBottom: 16,
    marginLeft: -8,
  },
  ol: {
    marginTop: 0,
    marginBottom: 16,
    marginLeft: -8,
  },
  li: {
    paddingLeft: 8,
    marginTop: 0,
    marginBottom: 8,
  },
  p: {
    marginTop: 0,
    marginBottom: 32,
  },
  table: {
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 16,
    marginBottom: 32,
  },
};
