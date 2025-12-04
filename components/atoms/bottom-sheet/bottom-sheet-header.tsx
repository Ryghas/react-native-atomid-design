import {BottomSheetView} from '@gorhom/bottom-sheet';
import {useTheme} from '@react-navigation/native';
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {BaseButton} from '../button';
import {Icon} from '../icon';
import {Text, TextProps} from '../text';

interface Props extends ViewProps {
  size?: 'normal' | 'large';
  title?: string;
  subtitle?: string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
  closeButtonProps?: PressableProps;
  closeIconColor?: string;
}

export const BottomSheetHeader = ({
  size = 'normal',
  title,
  subtitle,
  titleProps,
  subtitleProps,
  closeButtonProps,
  style,
  closeIconColor,
}: Props) => {
  const {colors} = useTheme();
  const isLarge = size === 'large';
  const iconColor = closeIconColor
    ? closeIconColor
    : isLarge
    ? colors.grey100
    : colors.black;

  return (
    <BottomSheetView style={[styles.container, style]}>
      <BottomSheetView style={[styles.titleContainer]}>
        {!!title && (
          <Text type={isLarge ? 'h3' : 'l_sm'} {...titleProps}>
            {title}
          </Text>
        )}
        {!!subtitle && (
          <Text type={'m'} {...subtitleProps}>
            {subtitle}
          </Text>
        )}
      </BottomSheetView>

      <BaseButton
        style={[
          styles.closeButton,
          closeButtonProps?.style as StyleProp<ViewStyle>,
        ]}
        {...closeButtonProps}>
        {!!closeButtonProps && (
          <Icon name={isLarge ? 'close-thin' : 'x'} color={iconColor} />
        )}
      </BaseButton>
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 8,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
