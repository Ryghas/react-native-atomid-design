import {createIconSetFromIcoMoon} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import React, {ComponentProps} from 'react';

const IcoMoonIcon = createIconSetFromIcoMoon(
  require('./selection.json'),
  'IcoMoon',
  'icomoon.ttf',
);

export interface IconProps extends ComponentProps<typeof IcoMoonIcon> {
  name:
    | 'alert-triangle'
    | 'arrow-left'
    | 'arrow-right'
    | 'calendar'
    | 'camera-retake'
    | 'camera'
    | 'caretdown'
    | 'check'
    | 'checkmark-circle'
    | 'chevron-down'
    | 'chevron-right'
    | 'close-circle'
    | 'close-thin'
    | 'contact'
    | 'download'
    | 'dropdown'
    | 'edit-square'
    | 'elipsis'
    | 'help-center'
    | 'info-circle'
    | 'info'
    | 'marker-pin'
    | 'page'
    | 'pencil'
    | 'plus'
    | 'refresh'
    | 'search'
    | 'share'
    | 'trash'
    | 'upload'
    | 'user'
    | 'vehicle'
    | 'x';
}

export const Icon = ({size, color, ...props}: IconProps) => {
  const {colors} = useTheme();

  return (
    <IcoMoonIcon size={size || 24} color={color || colors.black} {...props} />
  );
};
