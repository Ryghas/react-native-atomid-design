import {useTheme} from '@react-navigation/native';
import {
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export const BaseButton = ({
  android_ripple,
  style,
  ...props
}: PressableProps) => {
  const {colors} = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      android_ripple={{
        foreground: true,
        color: `${colors.disabled}33`,
        ...android_ripple,
      }}
      style={({pressed}) => [
        Platform.select({
          ios: {
            opacity: pressed ? 0.6 : 1,
          },
          android: {
            opacity: pressed ? 0.6 : 1,
          },
        }),
        {overflow: 'hidden'},
        style as StyleProp<ViewStyle>,
      ]}
      {...props}
    />
  );
};
