import {useTheme} from '@react-navigation/native';
import {
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import {BaseButton} from '../base-button';

type Props = PressableProps;

export const CameraButton = ({style, ...props}: Props) => {
  const {colors} = useTheme();

  return (
    <BaseButton
      disabled={props.disabled}
      style={[
        style as StyleProp<ViewStyle>,
        styles.baseButtonStyle,
        {borderColor: colors.white},
      ]}
      {...props}>
      <View style={[styles.buttonInnerView, {backgroundColor: colors.white}]} />
    </BaseButton>
  );
};

const styles = StyleSheet.create({
  baseButtonStyle: {
    borderWidth: 6,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
  buttonInnerView: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
});
